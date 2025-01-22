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
        
        var users = JSON.parse(localStorage.getItem('users'));
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users)); 

        alert("Sign up successful! Welcome to the Szechuan Zone!");
        window.location.href = 'login.html';
        
        /*
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
        */
    });

    document.body.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            subm.click();
        }
    });
}