function performLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-msg');
    const loginCard = document.querySelector('.login-card');

    const user = usernameInput.value.trim();
    const pass = passwordInput.value;

    // Limpa erros anteriores
    errorMsg.innerText = "";
    loginCard.classList.remove('shake-animation');

    // REGRAS DE VALIDAÇÃO
    const hasLetter = /[a-zA-Z]/.test(pass);
    const hasNumber = /\d/.test(pass);
    const isLongEnough = pass.length >= 6;

    if (!user) {
        showError("Um Alquimista precisa de um nome.");
        return;
    }

    if (!isLongEnough || !hasLetter || !hasNumber) {
        showError("A Troca Equivalente exige: Min. 6 caracteres, letras e números.");
        return;
    }

    // SUCESSO - Redirecionamento
    const flashDiv = document.createElement('div');
    flashDiv.className = 'flash-overlay';
    flashDiv.style.animation = 'transmutationLight 1s forwards';
    document.body.appendChild(flashDiv);

    setTimeout(() => { 
        window.location.href = "Portal/Dashboard.html";
    }, 500); // Espera 0.5s (tempo do clarão branco cobrir a tela)
}

function showError(message) {
    const errorMsg = document.getElementById('error-msg');
    const loginCard = document.querySelector('.login-card');
    errorMsg.innerText = message;
    loginCard.classList.add('shake-animation');
    void loginCard.offsetWidth; 
}

// update 2: enter button + fixed password eye bug

let enter = document.getElementById('password');

enter.addEventListener('keydown', botão=> {
    if (botão.key==='Enter') {
        performLogin();
    }
});

function performLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-msg');
    const loginCard = document.querySelector('.login-card');
    const loginScreen = document.getElementById('login-screen');
    const platformScreen = document.getElementById('platform-screen');

    const user = usernameInput.value.trim();
    const pass = passwordInput.value;

    errorMsg.innerText = "";
    loginCard.classList.remove('shake-animation');

    const hasLetter = /[a-zA-Z]/.test(pass);
    const hasNumber = /\d/.test(pass);
    const isLongEnough = pass.length >= 6;

    if (!user) {
        showError("Um Alquimista precisa de um nome.");
        return;
    }

    if (!isLongEnough || !hasLetter || !hasNumber) {
        showError("A Troca Equivalente exige: Min. 6 caracteres, letras e números.");
        return;
    }

    const flashDiv = document.createElement('div');
    flashDiv.className = 'flash-overlay';
    flashDiv.style.animation = 'transmutationLight 1s forwards';
    document.body.appendChild(flashDiv);

    setTimeout(() => {
        window.location.href = "Portal/Dashboard.html"; 
    }, 500);
}

function showError(message) {
    const errorMsg = document.getElementById('error-msg');
    const loginCard = document.querySelector('.login-card');
    errorMsg.innerText = message;
    loginCard.classList.add('shake-animation');
    void loginCard.offsetWidth; 
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('toggle-pass');

    // Se a senha está oculta, mostre-a
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.add('eye-open'); // Adiciona brilho
    } 
    // Se a senha está visível, esconda-a
    else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('eye-open'); // Remove brilho
    }
}

const passwordField = document.getElementById('password');
const eyeButton = document.getElementById('toggle-pass');

passwordField.addEventListener('input', function() {
    
    // Se tiver texto escrito -> Mostra o olho
    if (passwordField.value.length > 0) {
        eyeButton.classList.add('visible');
    } 
    // Se estiver vazio -> Esconde o olho
    else {
        eyeButton.classList.remove('visible');
        
        // Reseta para modo senha se o usuário apagar tudo
        passwordField.type = 'password';
        eyeButton.classList.remove('eye-open');
    }
});