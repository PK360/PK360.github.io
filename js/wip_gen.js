idx = [], i = -1;

window.onload = function () {
    changeLogin();

    document.getElementById("start").addEventListener("click", start);
    document.getElementById("stop").addEventListener("click", stop);
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
        prof.href = "profile.html";
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

function start() {
    idx[++i] = setInterval(function () {
        let canv = document.getElementById("space")
        let printer = canv.getBoundingClientRect();
        let dot = document.createElement("div");

        dot.style.display= "inline-block";
        dot.style.position = "absolute";
        let w = Math.floor(printer.right - printer.left);
        let h = Math.floor(printer.bottom - printer.top);
        let posx = Math.floor(Math.min(20 + Math.random() * w, w - 30));
        let posy = Math.floor(Math.min(printer.top + 10 + Math.random() * h, printer.top + h - 30));
        dot.style.left = posx + "px";
        dot.style.top = posy + "px";

        dot.innerHTML = "hello";
        dot.style.fontSize = "20px";
        dot.style.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        canv.appendChild(dot);
    }, 1500);
    console.log(idx);
    console.log(i);
}

function stop() {
    console.log(idx);
    console.log(i);
    if (i != -1) {
        clearInterval(idx[i]);
        i--;
        let canv = document.getElementById("space");
        while (canv.lastElementChild) {
            canv.removeChild(canv.lastElementChild);
        }
    }
}