document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('input[type="button"][value="Ingresar"]');
    const registerButton = document.querySelector('input[type="button"][value="Registrarse"]');

    loginButton.addEventListener('click', function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Previene la navegación si la validación falla
        } else {
            window.location.href = 'index.html'; // Redirige a la página principal si todo es correcto
        }
    });

    registerButton.addEventListener('click', function(event) {
        window.location.href = 'registro.html'; // Redirige a la página de registro
    });

    function validateForm() {
        let isValid = true;
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validación de nombre de usuario
        if (!username || username.length < 4) {
            alert('El nombre de usuario debe tener al menos 4 caracteres.');
            isValid = false;
        }

        // Validación de contraseña
        if (!password || password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            isValid = false;
        }

        return isValid;
    }
});
