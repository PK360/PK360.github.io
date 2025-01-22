window.onload = function () {
    localStorage.setItem('username', 'null');

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
        localStorage.setItem('users', JSON.stringify(users));
    })
    .catch(function(err){
        alert(err);
    });
}