let sb = document.querySelector("form");
sb.addEventListener('submit', (e) => {
    let password = document.getElementById("pass");
    let password_conf = document.getElementById("conf-pass");
    console.log(password);
    console.log(password_conf);
    if (password.value !== password_conf.value) { 
        e.preventDefault();
        displayError();
    }
});


let displayError = () => {
    let error_msg = document.getElementById("error");
    error_msg.style.opacity = 1;
}