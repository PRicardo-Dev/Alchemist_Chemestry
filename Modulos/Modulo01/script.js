function toggleSidebar(side) {
    const leftSidebar = document.querySelector('.left-sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');

    if (side === 'left') {
        // Se clicou na Esquerda:
        // 1. Alterna a Esquerda (abre se fechada, fecha se aberta)
        leftSidebar.classList.toggle('active');
        
        // 2. GARANTE que a Direita feche
        rightSidebar.classList.remove('active');
    } 
    else if (side === 'right') {
        // Se clicou na Direita:
        // 1. Alterna a Direita
        rightSidebar.classList.toggle('active');
        
        // 2. GARANTE que a Esquerda feche
        leftSidebar.classList.remove('active');
    }
}