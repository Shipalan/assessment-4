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
        // event.preventDefault();
        
        const first = firstName.value
        const last = lastName.value

        const body = {
            first_name: first,
            last_name: last
        }

        axios.post(baseURL + '/api/usersList', body)
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
        const userList = document.getElementById('userList')
        // console.log(data)
        // document.getElementById('userList').innerHTML = data
        // .map(function (users) {
            // return `<li id="${users.id}">` + users.first_name + ' ' + users.last_name + '</li>'
        // })
        // .join("")

    for (let i=0; i<data.length; i++){
        const li = document.createElement("li")
        li.innerHTML = data[i].first_name + ' ' + data[i].last_name
        li.id = data[i].id
        li.addEventListener('click', deleteUser)
        userList.append(li)
    }
     })
    .catch(function (err) {
            document.getElementById('usersList').innerHTML =
            '<li class="text-danger">' + err.message + "</li>"
     })

    };

getUsers()
    
const deleteUser = (event) => {
    // console.log(event.target.id)
    axios.delete(baseURL + '/api/userDelete/' + event.target.id)
    .then(function (res) {
        alert('User Deleted')
    })
    event.target.remove()
}

 


    complimentBtn.addEventListener('click', getCompliment)
    fortuneBtn.addEventListener('click', getFortune)
    formElement.addEventListener('submit', submitName)
