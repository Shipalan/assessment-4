const nameContainer = document.getElementById('names')


const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune")
const nameForm = document.getElementById('nameFormSubmit')



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

const submitName = body => {
    axios.post('http://localhost:4000/api/name', body)
    .then(res => {
            const form = res.body;
            alert(form)
        })
        
    }
    
    function submitHandler(e) {
        e.preventDefault()
    
        let fName = document.querySelector('#fName')
        let lName = document.querySelector('#lName')
    
        let bodyObj = {
            fName: fName.value,
            lName: lName.value
        }
    
        submitName(bodyObj)
    
        fName.value = ''
        lName.value = ''
    }



    complimentBtn.addEventListener('click', getCompliment)
    fortuneBtn.addEventListener('click', getFortune)
    nameForm.addEventListener('click', submitName)
    
    