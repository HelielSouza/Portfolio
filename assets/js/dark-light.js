const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    const darkLogo = document.querySelector('.logo .logo-dark');
    const lightLogo = document.querySelector('.logo .logo-light');
    const darkDev = document.querySelector('.intro-img .developer-dark');
    const lightDev = document.querySelector('.intro-img .developer-light');
    const darkContact = document.querySelector('.contacts-img .contact-dark');
    const lightContact = document.querySelector('.contacts-img .contact-light');

    if (chk.checked) {
        darkLogo.style.display = 'none';
        lightLogo.style.display = 'inline-block';
        darkDev.style.display = 'none';
        lightDev.style.display = 'inline-block';
        darkContact.style.display = 'none';
        lightContact.style.display = 'inline-block';
    } else {
        darkLogo.style.display = 'inline-block';
        lightLogo.style.display = 'none';
        darkDev.style.display = 'inline-block';
        lightDev.style.display = 'none';
        darkContact.style.display = 'inline-block';
        lightContact.style.display = 'none';
    }
    document.querySelector('.dark-bg-svg').classList.toggle('light-bg-svg');
    document.querySelector('.dark-bg-menu').classList.toggle('light-bg-menu');
    document.querySelectorAll('.menu ul li a').forEach(h2 => {
        h2.classList.toggle('dark-color');
    })
    document.querySelectorAll('.menu ul li a').forEach(h2 => {
        h2.classList.toggle('crimson-color-hover');
    })

    document.querySelectorAll('.neonText').forEach(h2 => {
        h2.classList.toggle('dark-color');
    })
    document.querySelectorAll('.main-content p').forEach(p => {
        p.classList.toggle('dark-color');
    })
    document.querySelectorAll('.link-item .span-link span').forEach(span => {
        span.classList.toggle('dark-color');
    })
    document.querySelectorAll('.link-item .span-not-ok span').forEach(spann => {
        spann.classList.toggle('dark-color');
    })
    document.querySelectorAll('.bx-link-alt').forEach(link_i => {
        link_i.classList.toggle('dark-color');
    })
    document.querySelectorAll('.bxl-github').forEach(github_i => {
        github_i.classList.toggle('dark-color');
    })
    document.querySelectorAll('.slider h4').forEach(h4 => {
        h4.classList.toggle('dark-color');
    });
    document.querySelectorAll('.slide-show .list .item').forEach(item => {
        item.classList.toggle('slide-white-shadow');
    });
    document.querySelectorAll('.timeline-column .title').forEach(title => {
        title.classList.toggle('dark-color');
    });
    document.querySelectorAll('.timeline-column .title i').forEach(title_i => {
        title_i.classList.toggle('crimson-color');
    });
    document.querySelectorAll('.timeline-content .content').forEach(border => {
        border.classList.toggle('crimson-color-border');
    });
    document.querySelectorAll('.timeline-box .timeline-content').forEach(point => {
        point.classList.toggle('crimson-color-point');
    });
    document.querySelectorAll('.timeline-column .timeline-box').forEach(border_left => {
        border_left.classList.toggle('crimson-border-left');
    });
    document.querySelectorAll('.content .year').forEach(year => {
        year.classList.toggle('crimson-color');
    });
     document.querySelectorAll('.timeline-content .content h3').forEach(cnt_h3 => {
        cnt_h3.classList.toggle('dark-color');
    });
    document.querySelectorAll('.timeline-content .content h4').forEach(cnt_h4 => {
        cnt_h4.classList.toggle('dark-color');
    });
    document.querySelectorAll('.card').forEach(card_sdhw => {
        card_sdhw.classList.toggle('card-dark-shadow');
    });
    document.querySelectorAll('form legend').forEach(form_lgnd => {
        form_lgnd.classList.toggle('dark-color');
    });
    document.querySelectorAll('form label').forEach(form_lgnd => {
        form_lgnd.classList.toggle('dark-color');
    });
    document.querySelectorAll('.form-group input').forEach(form_lgnd => {
        form_lgnd.classList.toggle('crimson-color-border');
    });
    document.querySelectorAll('.form-group textarea').forEach(form_lgnd => {
        form_lgnd.classList.toggle('crimson-color-border');
    });
    document.querySelectorAll('.form-group input').forEach(form_lgnd => {
        form_lgnd.classList.toggle('crimson-box-shadow');
    });
    document.querySelectorAll('.form-group textarea').forEach(form_lgnd => {
        form_lgnd.classList.toggle('crimson-box-shadow');
    });
    document.querySelectorAll('.white-text').forEach(form_lgnd => {
        form_lgnd.classList.toggle('dark-text-footer');
    });
    document.querySelectorAll('footer a').forEach(form_lgnd => {
        form_lgnd.classList.toggle('dark-text-footer');
    });
    document.querySelector('.form-group button').classList.toggle('form-button-light');
});
