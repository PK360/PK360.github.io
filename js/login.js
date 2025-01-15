window.onload = function () {
    let subm = document.getElementById('logb');
    subm.addEventListener('click', function () {
        let user = document.getElementById('uname').value;
        let pass = document.getElementById('pswd').value;
           
        var promise = fetch('https://pk360.github.io/json/users.json');
        var users = [];
        
        promise.then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.text();
        })
        .then(function(text) {    
            users = JSON.parse(text);
            const found = users.find(obj => obj.password === pass && obj.username === user);
            if (found) {
                localStorage.setItem('username', user);
                alert("Login successful!");
                window.location.href = 'home.html';
            } else {
                alert('Login failed...Try again!');
            }
        })
        .catch(function(err){
            alert(err);
        });
    });

    document.body.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            subm.click();
        }
    });
}