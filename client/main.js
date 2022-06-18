const nameContainer = document.getElementById('names')


const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune")
const nameForm = document.getElementById('nameForm')

const submitName = name => {
axios.post('http://localhost:4000/api/name/', name)
.then(function (res) {
    alert(res.data)
})
}

function submitHandler(e) {
    e.preventDefault()

    let first = document.getElementById('fName')
    let last = document.getElementById('lName')

    let userObj = {
        fName: first.value,
        lName: last.value
    }

    submitName(userObj)

    first.value = ''
    last.value = ''
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
nameForm.addEventListener('submit', submitHandler)
