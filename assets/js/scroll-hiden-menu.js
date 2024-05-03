let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    // Verifica se o menu hamburguer está ativado
    const menuOpen = document.querySelector('.menu-hamburguer-open.active');

    // Verifica se o menu hamburguer está ativado
    if (!menuOpen) {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            document.getElementById("menu").classList.add("hidden");
        } else {
            document.getElementById("menu").classList.remove("hidden");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
});
