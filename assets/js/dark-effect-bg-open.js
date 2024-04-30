// Função para ativar a classe overlay.active apenas quando o menu está aberto
function toggleOverlay() {
    const overlay = document.querySelector('.overlay');
    const overlay2 = document.querySelector('.shadow');
    overlay.classList.toggle('active');
    overlay2.classList.toggle('active');
}

// Seletor para o elemento .menu-hamburguer-open
document.querySelector('.menu-hamburguer-open').addEventListener('click', function() {
    // Chama a função para ativar a classe overlay.active apenas quando o menu está aberto
    toggleOverlay();
});
