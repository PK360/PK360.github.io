window.onload = function () {
    let subm = document.getElementById('logb');
    subm.addEventListener('click', function () {
        let user = document.getElementById('uname').value;
        let pass = document.getElementById('pswd').value;
           
        var users = JSON.parse(localStorage.getItem('users'));
        const found = users.find(obj => obj.password === pass && obj.username === user);
        if (found) {
            localStorage.setItem('username', user);
            alert("Login successful!");
            window.location.href = 'home.html';
        } else {
            alert('Login failed...Try again!');
        }
    });

    document.body.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            subm.click();
        }
    });
}