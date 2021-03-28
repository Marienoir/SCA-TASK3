function store(event){
    var username=document.getElementById('username').value;
    var phoneNumber=document.getElementById('phoneNumber').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    
    const login={
        username:username,
        phoneNumber:phoneNumber,
        email:email,
        password:password
    }
    window.localStorage.setItem('user',JSON.stringify(login))
}
function getLoginDetail(){
    var getUsername=document.getElementById('getUsername').value;
    var getPassword=document.getElementById('getPassword').value;

    const loginDetail={
        getUsername:getUsername,
        getPassword:getPassword
    }
    window.localStorage.setItem('userDetails',JSON.stringify(loginDetail))
    //console.log(storedSetting)
    var storedSetting=JSON.parse(localStorage.getItem('user'));
    var detailSettings=JSON.parse(localStorage.getItem('userDetails'));
    if((storedSetting.username !== detailSettings.getUsername) && (storedSetting.password !== detailSettings.getPassword)){
        alert('Username or Email incorrect')
        
       
    }
    else if (storedSetting.username == detailSettings.getUsername && storedSetting.password == detailSettings.getPassword){
        window.location.href ="profile.html"
    }
}

function dispData(){
    let {username,phoneNumber,email,password}=JSON.parse(window.localStorage.getItem('user'));
    var output =document.getElementById('output')
    output.innerHTML=`
    <h1>Hello ${username},</h1>

    <h4>Phone Number</h4>
    <p>${phoneNumber}</p>

    <h4>Email</h2>
    <p>${email}</p>

    <h4>Password</h4>
    <p>${password}</p>
    `
}


// function removeItem(){ //deletes item from localStorage
//     var key = document.getElementById('removeKey').value; //gets key from user
//     localStorage.removeItem(key) //passes key to the removeItem method
//     console.log("remove items");
// }

// function clearStorage(){ //clears the entire localStorage
//     localStorage.clear()
//     console.log("clear records");
// }



// function RandomUser() {
//   fetch("https://randomuser.me/api/?results=3")
//   .then(response=>{
//     console.log(response);
//     if(!response.ok){
//       throw Error("Error");
//     }
//       return response.json();
//     })
//     .then(data =>{
//       console.log(data.results);
//       const html = data.results.map(user =>{
//         return`
        
//         <div class="userType">
//           <div class="userType1">
//           <img src=${user.picture.medium} alt="" />
//           </div>
//           <div class="userType2">
//           <p> ${user.cell}</p>
//           </div>
//         </div>`;
//       }).join("");
//       console.log(html);
//       document.querySelector(".user").insertAdjacentHTML("afterbegin", html);
//     })
//     .catch(error =>{
//       console.log(error);
//     });
// }