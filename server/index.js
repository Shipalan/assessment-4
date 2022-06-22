const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createUser, updateUser} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post('/api/user', createUser)
app.put('/api/updateUser/:name', updateUser)


app.listen(4000, () => console.log("Server running on 4000"));
