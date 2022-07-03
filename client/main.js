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

const getUsers = () => {
   
    axios.get(baseURL + '/api/usersList')
    .then(function (res) {
        const data = res.data;
        document.getElementById('userList').innerHTML = data
        .map(function (users) {
            return '<li class="row">' + users 
        })
        .join("")
        })
        .catch(function (err) {
            document.getElementById('userList').innerHTML =
            '<li class="text-danger">' + err.message + "</li>"
        })

    };


    


 


    complimentBtn.addEventListener('click', getCompliment)
    fortuneBtn.addEventListener('click', getFortune)
    formElement.addEventListener('submit', submitName)
    formDelElement.addEventListener('submit', delUser)