window.onload = function () {
    changeLogin();
}

function respIcon() {
    let x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function logout_account() {
    let login_title = document.querySelector("#login_name");
    localStorage.setItem('username', 'null');
    changeLogin();
    location.reload();
}

function changeLogin() {
    let nav = document.getElementById("login_nav");
    let logout = document.getElementById("login_logout");
    let login = document.getElementById("login_login");
    let prof = document.getElementById("prof");
    let login_title = document.getElementById("login_name");
    if (logout != null) { nav.removeChild(logout); }
    if (login != null) { nav.removeChild(login); }

    let user = localStorage.getItem('username');
    if (user != 'null') {
        login_title.classList.add("loggedin");
        login_title.innerHTML = user + " <img src=\"../img/anonymus.jpg\" id=\"login_pfp\"> &#9660;";
    }
    else {
        login_title.classList.remove("loggedin");
        login_title.innerHTML = "[anonymus] <img src=\"../img/anonymus.jpg\" id=\"login_pfp\"> &#9660;";
    }

    prof.style.userSelect = "none";
    if (login_title.classList.contains("loggedin")) {
        prof.href = "NO.html";
        let logout = document.createElement("a");
        logout.setAttribute("id", "login_logout");
        logout.addEventListener("click", logout_account);
        logout.style.userSelect = "none";
        logout.href = "javascript:void(0)";
        logout.innerHTML = "Logout";
        nav.appendChild(logout);
    } else {
        prof.href = "login.html";
        let login = document.createElement("a");
        login.setAttribute("id", "login_login");
        login.href = "../pages/login.html";
        login.innerHTML = "Login";
        nav.appendChild(login);
    }
}