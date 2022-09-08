var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var usermessage = document.getElementById("usermessage");
var passwordmessage = document.getElementById("passwordmessage");

var user ="tresor@26";
var pass = "12345678910";
function checkUsername() {
    var username = usernameInput.value;
  
    if (username.length < 8) {
    usermessage.innerHTML = "Username must be at least 8 characters long";
    }
    else {
        usermessage.innerHTML = "";
    }
}
function checkPassword() {
    var password = passwordInput.value;

    if (password.length < 10) {
        passwordmessage.innerHTML = "Password must be at least 10 characters long";
    }
    else {
        passwordmessage.innerHTML = "";
    }
}
function checkValidation(){
    if(username!=user && password!=pass){
   loginmessage.innerHTML="invalid credentials";
    }
    else{
        loginmessage.innerHTML="valid credentials"
    }
}