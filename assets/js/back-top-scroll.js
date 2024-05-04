window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
        document.querySelector('.back-to-top').classList.add('visible');
    } else {
        document.querySelector('.back-to-top').classList.remove('visible');
    }
});
