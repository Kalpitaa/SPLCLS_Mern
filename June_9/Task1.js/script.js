function validateLogin() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    
    if (email === "") {
        message.style.color = "red";
        message.innerText = "Email Required";
        return;
    }

   
    if (password.length < 6) {
        message.style.color = "red";
        message.innerText = "Password must be at least 6 characters";
        return;
    }

   
    message.style.color = "green";
    message.innerText = "Login Successful";
}