let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Role para baixo
        document.getElementById("menu").classList.add("hidden");
    } else {
        // Role para cima
        document.getElementById("menu").classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Garante que o valor não seja negativo
});
