const toggleDarkMode = () => {
    const elementsToToggle = [
        ['.menu-desktop .logo .logo-dark', '.menu-desktop .logo .logo-light'],
        ['.menu-mobile .logo .logo-dark', '.menu-mobile .logo .logo-light'],
        ['.intro-img .developer-dark', '.intro-img .developer-light'],
        ['.contacts-img .contact-dark', '.contacts-img .contact-light']
    ];

    elementsToToggle.forEach(([darkSelector, lightSelector]) => {
        const darkElement = document.querySelector(darkSelector);
        const lightElement = document.querySelector(lightSelector);
        darkElement.style.display = chk.checked ? 'none' : 'inline-block';
        lightElement.style.display = chk.checked ? 'inline-block' : 'none';
    });

    const elementsToToggleClass = [
        ['.dark-bg-svg', 'light-bg-svg'],
        ['.dark-bg-menu', 'light-bg-menu'],
        ['.about-text-p', 'dark-color'],
        ['.nav-list', 'light-bg-menu'],
        ['footer', 'dark-text-footer']
    ];

    elementsToToggleClass.forEach(([selector, className]) => {
        document.querySelector(selector).classList.toggle(className);
    });

    const elementsToToggleColor = [
        'p',
        '.menu ul li a',
        '.menu-hamburguer-open div',
        '.neonText',
        '.link-item .span-link span',
        '.link-item .span-not-ok span',
        '.bx-link-alt',
        '.bxl-github',
        '.slider h4',
        '.timeline-column .title',
        '.timeline-column .title i',
        '.timeline-content .content h3',
        '.timeline-content .content h4',
        'form legend',
        'form label',
        '.white-text',
        'footer a'
    ];

    elementsToToggleColor.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if (selector !== 'footer') {
                element.classList.toggle('dark-color');
            }
        });
    });

    const elementsToToggleSpecificClass = [
        ['.menu ul li a', 'crimson-color-hover'],
        ['.slide-show .list .item', 'slide-white-shadow'],
        ['.timeline-content .content', 'crimson-color-border'],
        ['.timeline-box .timeline-content', 'crimson-color-point'],
        ['.timeline-column .timeline-box', 'crimson-border-left'],
        ['.content .year', 'crimson-color'],
        ['.card', 'card-dark-shadow'],
        ['.form-group input', ['crimson-color-border', 'crimson-box-shadow']],
        ['.form-group textarea', ['crimson-color-border', 'crimson-box-shadow']],
        ['.form-group button', 'form-button-light']
    ];

    elementsToToggleSpecificClass.forEach(([selector, classes]) => {
        const elements = document.querySelectorAll(selector);
        if (Array.isArray(classes)) {
            classes.forEach(className => {
                elements.forEach(element => {
                    element.classList.toggle(className);
                });
            });
        } else {
            elements.forEach(element => {
                element.classList.toggle(classes);
            });
        }
    });
};

const chk = document.getElementById('chk');
chk.addEventListener('change', toggleDarkMode);
