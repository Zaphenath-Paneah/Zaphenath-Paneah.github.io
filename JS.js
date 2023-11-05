//Function to open navbar
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}
//Function to open navbar(login page)
function openNav() {
  document.getElementById("sidenaav").style.width = "250px";
}
//Function to close navbar
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
//Function to close navbar(login page)
function closeNav() {
  document.getElementById("sidenaav").style.width = "0";
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDroopdown").classList.toggle("show");
}
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  //Function to set a cookie when sign up form is submitted
  function setCookies(){
    const username = document.getElementById("un").value;
    const password = document.getElementById("psw").value;
    
    let d = new Date();
    exdays = d.setTime(d.getTime + (365*24*60*60*1000));
    document.cookie = "username=" + username + "; expires=" + exdays +"; path=/Home.html";
    document.cookie = "username=" + password + "; expires=" + exdays +"; path=/Home.html";
  }

  //Function to submit form and be redirected to (User Page) from Sign up Page---new user
  function submitForm(){
    setCookies();
    window.location.href="/Home.html";
  }

  //Function for 2nd time users (takes them to a login page)
  function checkCookies(){
    const cookie = document.cookie;
    const username = cookie.split("=")[1];
    const password = cookie.split("=")[2];

    if(username==true && password==true){
      window.location.href="/Login.html";
    }else{
      alert("You are not a member yet.Please Sign Up To Access Our Services.");
    }
  }

  //Function
  function checkLoginCookies(){
    const cookie = document.cookie;
    const username = cookie.split("=")[1];
    const password = cookie.split("=")[2];

    const UsrNm = document.getElementById("Un").value;
    const PSWD = document.getElementById("Un").value;

    if(username==UsrNm && password==PSWD){
      window.location.href="/Home.html";
    }else{
      document.getElementById("errmsg").style.height="5em";
      document.getElementById("errmsg").style.paddingTop="25px";
      document.getElementById("errmsg").style.color="white";
      document.getElementById("errmsg").innerHTML="Either Username or Password is wrong or both!"
    }
  }

  //Event listeners
  document.getElementById("signup-form").addEventListener("submit",submitForm);
  document.getElementById("login-form").addEventListener("submit",checkLoginCookies);

  