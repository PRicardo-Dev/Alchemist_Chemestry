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