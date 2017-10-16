var registerBtn = document.getElementById("register");
var signInBtn = document.getElementById("signIn");  
var signInForm = document.getElementById("signIn-form"); 
var registerForm = document.getElementById("register-form");

registerBtn.addEventListener('click', function(){
  signInForm.style.display = "none";
  registerForm.style.display = "block";
});

signInBtn.addEventListener('click', function(){
  registerForm.style.display = "none";
  signInForm.style.display = "block"; 
});




