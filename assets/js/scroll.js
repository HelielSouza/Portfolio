const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { 
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
    
});

const hiddenFadeIn = document.querySelectorAll('.hidden-fade-in');
hiddenFadeIn.forEach((el) => observer.observe(el));

const hiddenHeading = document.querySelectorAll('.hidden-heading');
hiddenHeading.forEach((el) => observer.observe(el));

const hiddenParagraph = document.querySelectorAll('.hidden-p');
hiddenParagraph.forEach((el) => observer.observe(el));

const hiddenSectionProject = document.querySelectorAll('.hidden-section-projects');
hiddenSectionProject.forEach((el) => observer.observe(el));

const hiddenHeadingTime = document.querySelectorAll('.hidden-heading-time');
hiddenHeadingTime.forEach((el) => observer.observe(el));