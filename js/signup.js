window.onload = function () {
    let subm = document.getElementById('subb');
    subm.addEventListener('click', function () {
        let form = document.forms[0];
        console.log(form);
        let data = {
            "username": form.username.value,
            "password": form.password.value
        }
        console.log(data);
        let pass1 = form.password.value;
        let pass2 = form.password2.value;

        if (pass1 != pass2) {
            throw new Error("Passwords do not match!");
        }
        
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
            users.push(data);
            console.log(users);
            fetch('../json/users.json', {
                method:"post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(function (response) {
                return response.status;
            })
            .then(function(status) {
                alert(status);
            }); 

            alert("Sign up successful! Welcome to the Szechuan Zone!");
            window.location.href = 'login.html';
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