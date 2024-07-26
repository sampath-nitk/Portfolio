

/*===== SCROLL REVEAL =====*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .servicess-box, .contact form',{ origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content',{ origin: 'right' });

/*===== TYPED JS =====*/
const typed = new Typed('.multiple-text',{
    strings: ['Frontend developer', 'Web developer', 'Cricketer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

