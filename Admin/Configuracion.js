document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            registerUser();
        }
    });
});

function validateForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username.length < 4) {
        alert("El nombre de usuario debe tener al menos 4 caracteres.");
        return false;
    }
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }
    return true;
}

function registerUser() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;

    const user = { username, password, role };
    localStorage.setItem(username, JSON.stringify(user));
    alert(`Usuario ${username} registrado como ${role}`);
    displayRegisteredUsers();
}

function displayRegisteredUsers() {
    console.log('Usuarios registrados:');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));
        console.log(`${user.username} (${user.role})`);
    }
}
