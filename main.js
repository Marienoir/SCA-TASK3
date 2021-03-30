// classList use
function hover(){
    var buttonHover=document.getElementById('button-hover');
    buttonHover.classList.add('hover')
}
function normal(){
    var buttonHover=document.getElementById('button-hover');
    buttonHover.classList.remove('hover')
}

// Store Registration Details
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
function myFunction(){
    document.getElementById('#button-details').addEventListener('click',
    window.location.href='profile.html'
    )
}

// Store details from login page
function getLoginDetail(event){
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
    if ((storedSetting.username === detailSettings.getUsername) && (storedSetting.password === detailSettings.getPassword)){  // checks if registered details matches login details
        alert('User logged in successfully.')
        document.getElementById('loginForm').action='profile.html'
    }
    else{
        alert('Username or password is incorrect. Try again')
        document.getElementById('loginForm').action="login.html"
    }
}

//Display the details from the register page
function dispData(){
    let {username,phoneNumber,email,password}=JSON.parse(window.localStorage.getItem('user'));
    var output =document.getElementById('output')
    output.innerHTML=`
    <div>
      <h1 class="font-bold text-xl mb-8">HELLO ${username},</h1>
      <div class='details'>
        <div>
        <h3 class="font-bold text-xl mb-4">Registration Details:</h3>
        <h4 class="font-bold text-l mb-4">Phone Number</h4>
        <p>${phoneNumber}</p>
        </div>
        <div>
        <h4 class="font-bold text-xl my-2">Email</h4>
        <p>${email}</p>
        </div>
        <div>
        <h4 class="font-bold text-xl my-2">Password</h4>
        <p>${password}</p>
        </div>
      </div>
    </div>
    `
}

//clears the users details from local storage and redirects backl to the login page
function logout(){ 
    var detailSettings=JSON.parse(localStorage.getItem('userDetails'));
    window.localStorage.removeItem('userDetails')
    alert("Successfully logged out");
}
function logoutUser(){
    document.getElementById('logout').addEventListener('click',
    logout()
    )
}
