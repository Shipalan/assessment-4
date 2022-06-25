const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune")
const formElement = document.getElementById('nameFormSubmit')
const firstName = document.getElementById('fName')
const lastName = document.getElementById('lName')
const updateForm = document.getElementById('updateForm')
const updateFirstName = document.getElementById('updateFirst')
const newFirstName = document.getElementById('newFirst')



const baseURL = "http://localhost:4000"

const getCompliment = () => {
    axios.get(baseURL + "/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
const getFortune = () => {
    axios.get(baseURL + "/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    }).catch((error) => {
        alert('Backend Broken!')
    })
};

const submitName = (event) => {
        event.preventDefault();
        
        const first = firstName.value
        const last = lastName.value

        const body = {
            first: first,
            last: last
        }

        axios.post(baseURL + '/api/user', body)
        .then((response) => {
            if (response.data.success) {
                alert('User added')
            } else {
                alert('failure')
            }
        })
        firstName.value = ''
        lastName.value = ''
}

const delUser = (event) => {
    event.preventDefault()

    const name = nameDelInput.value

    axios.put('http://localhost:4000/api/delUser/' + name)
    .then((res) => {
        if (res.data.success) {
            console.log('New database looks like: ')
            console.log(res.data.info)
        } else {
            alert('failure')
        }
    })

}
    


 


    complimentBtn.addEventListener('click', getCompliment)
    fortuneBtn.addEventListener('click', getFortune)
    formElement.addEventListener('submit', submitName)
    formDelElement.addEventListener('submit', delUser)