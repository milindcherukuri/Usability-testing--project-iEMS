// JavaScript source code
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("lgn_submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in - " + username);
        location.replace("./Dash.html");
    } else if (username === "admin" && password === "web_dev") {
        alert("You have successfully logged in - " + username);
        location.replace("./Dash-Admin.html");

    } else if (username === "organizer" && password === "web_dev") {
        alert("You have successfully logged in - " + username);
        location.replace("./Dash-Org.html");

    } else {
        alert("Please check your credentials");
    }
})