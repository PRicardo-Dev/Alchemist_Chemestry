function openModule(url) {
    const flashElement = document.getElementById('transmutation-flash');
    
    // 1. Ativa a explosão branca
    flashElement.classList.add('active-flash');

    // 2. Toca um som? (Opcional futuro)

    // 3. Espera a tela ficar branca (600ms) e então muda de página
    setTimeout(() => {
        window.location.href = url;
    }, 600);
}