const dataBase = [ 
{"id": 400, "first_name": "Alan", "last_name": "Shipley"},
{"id": 21, "first_name": "Aubrey", "last_name": "Shipley"},
{"id": 1000, "first_name": "Jaden", "last_name": "Shipley"}
]

let maxId = 3

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['A faithful friend is a strong defense.', 'A fresh start will put you on your way.', 'A lifetime friend shall soon be made.', 'A soft voice may be awfully persuasive.', 'Adventure can be real happiness.'];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
    },
    createUser: (req, res) => {
        const newBody = req.body
        newBody.id = ++maxId
        dataBase.push(newBody)
        console.log(dataBase)
        res.status(200).send({success: true})
    },
    getUsers: (req, res) => {
       res.status(200).send(dataBase)
    },
    deleteUser: (req,res) => {
       const id = +req.params.id
       let theIndex
       for (let i=0; i < dataBase.length; i++){        
        if (dataBase[i].id === id){
            theIndex = i
        }
    }
    dataBase.splice(theIndex, 1)
    }

}