const dataBase = [
  
]

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
        dataBase.push(req.body)
        console.log(dataBase)
        res.status(200).send({success: true})
    },
    delUser: (req, res) => {
        const name = req.params.name
        for(let i=0; i<dataBase.length; i++){
            if (dataBase[i].name === name) {
                dataBase.splice(i,1)
            }
        }
        res.status(200).send({success: true, info: dataBase})
    }
}