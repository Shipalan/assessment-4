const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createUser, getUsers, deleteUser} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post('/api/usersList', createUser)
app.get('/api/usersList', getUsers)
app.delete('/api/userDelete/:id', deleteUser)


app.listen(4000, () => console.log("Server running on 4000"));
