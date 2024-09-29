function login(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")
  
    // console.log(email.value);
    var email2 = localStorage.getItem('email')
    var password2 = localStorage.getItem('password')
    console.log(email2);
    if(email.value == email2 && password.value == password2){
      window.location='file:///C:/Users/Lenovo/OneDrive/Desktop/tugas%20jelita/local%20storage/dashboard.html'
      sessionStorage.setItem('name',username)
    } else {
      alert("login gagal")
    }
    
    // var username = localStorage.getItem('name')
    // if(email.value==email2 && password.value==password){
    //   window.location='file:///C:/Users/A%20S%20U%20S/OneDrive/Documents/Tugas%20JavaScript%20Nusantech/LocaStrorage/Dashboard.html'
    //   sessionStorage.setItem('name',username)
    // }else{
    //   alert("login gagal")
    // }
  }
  
  function register(){
    console.log("");
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var gender = document.getElementById("gender")
  // console.log(username);
    localStorage.setItem('name', name.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
    localStorage.setItem('gender', gender.value)
    window.location='file:///C:/Users/Lenovo/OneDrive/Desktop/tugas%20jelita/local%20storage/login.html'
  }
  
  var nama = sessionStorage.getItem("name")
  // console.log(nama);
  if (nama){
    document.getElementById("nama").innerText = username;
  }
  
  // document.getElementById("LoginForm").addEventListener("submit", login);
  // document.getElementById("registerForm").addEventListener("submit", register);