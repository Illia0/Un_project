document.getElementById('check').onclick = function(){
    let login = document.getElementById('login');
    let password = document.getElementById('password');
    let age = document.getElementById('age');
    alert('Login: ' + login.value + ',Password: ' + password.value + ',Age: ' + age.value)
}