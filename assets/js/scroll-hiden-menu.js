let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    const menuOpen = document.querySelector('.menu-hamburguer-open.active');

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
