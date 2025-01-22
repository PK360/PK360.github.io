window.onload = function () {
    let uname = document.getElementById('uname');
    let pass = document.getElementById('showpass');
    let arr = JSON.parse(localStorage.getItem('users'));

    uname.innerHTML = localStorage.getItem('username');
    let pwd = arr.find(x => x.username == localStorage.getItem('username')).password;
    console.log(pwd);
    for (let i of pwd) {
        pass.innerHTML += '*';
    }

    document.getElementById('showpass_check').addEventListener('change', function () {
        if (document.getElementById('showpass_check').checked) {
            pass.innerHTML = 'Password: ' + pwd;
        } else {
            pass.innerHTML = 'Password: ';
            for (i in pwd) {
                pass.innerHTML += '*';
            }
        }
    });
}

