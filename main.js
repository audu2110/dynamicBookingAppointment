const myForm = document.querySelector('#my-form');
// const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  var name=event.target.usrName.value;
  var email=event.target.emailid.value;
  
  
    let obj={
        name,
        email
    };
    
    axios.post("https://crudcrud.com/api/ee8021362d0341d4bdabb0d17f501b63/AppiontmentData",obj).then((response)=>{
      showNewUserOnScreen(response.data)  
    }).catch((err)=>{
      console.log(err);
    })
}

function showNewUserOnScreen(user){
  if(localStorage.getItem(user.email) !== null){
    removeUserFromScreen(email);
  }
  const parentNode=document.getElementById('listOfUsers');
  const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                                        <button onclick=deleteUser('${user.email}')> Delete User </button>
                                        <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                                     </li>`
  parentNode.innerHTML=parentNode.innerHTML+childHTML;
}



// Get the saved User Details from crudcrud

const myForm = document.querySelector('#my-form');
// const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  var name=event.target.usrName.value;
  var email=event.target.emailid.value;
  
  
    let obj={
        name,
        email
    };
    
    axios.post("https://crudcrud.com/api/ee8021362d0341d4bdabb0d17f501b63/AppiontmentData",obj).then((response)=>{
      showNewUserOnScreen(response.data)  
    console.log(response)
    }).catch((err)=>{
      console.log(err);
    })
  
}
window.addEventListener("DOMContentLoaded", () =>{

  axios.get("https://crudcrud.com/api/ee8021362d0341d4bdabb0d17f501b63/AppiontmentData").then((response)=>{
    showNewUserOnScreen(response.data)  
    for(var i=0;i<response.data.length;i++){
      showNewUserOnScreen(response.data[i])
    }
      console.log(response)
    }).catch((err)=>{
      console.log(err);
  })

})
function showNewUserOnScreen(user){
  if(localStorage.getItem(user.email) !== null){
    removeUserFromScreen(email);
  }
  const parentNode=document.getElementById('listOfUsers');
  const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                                        <button onclick=deleteUser('${user.email}')> Delete User </button>
                                        <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                                     </li>`
  parentNode.innerHTML=parentNode.innerHTML+childHTML;
}

