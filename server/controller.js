const users = require('./db.json')

let globalId = 0

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
    submitName: (req, res) => {
        console.log(req.body)
        const {fName, lName} = req.body
        let user = {
            fName: fName,
            lName: lName,
            id: globalId
        }
        users.push(user)
        globalId++
        res.status(200).send(users)
    }
}