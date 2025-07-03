document.addEventListener('DOMContentLoaded', function() {
    // Inizializza AOS con impostazioni avanzate
    AOS.init({
        duration: 800,
        easing: 'ease-in-out-quart', // Transizione più fluida
        once: false, // Le animazioni si ripetono ogni volta che l'elemento entra nella viewport
        mirror: true, // Le animazioni si invertono quando si scorre in su
        anchorPlacement: 'top-bottom' // L'animazione inizia quando l'elemento è visibile dal basso
    });

    // Animazione personalizzata per il pulsante CTA principale (se presente)
    const ctaButton = document.querySelector('.btn-primary');
    if (ctaButton) { // Controlla se il pulsante esiste nella pagina corrente
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 102, 255, 0.35)'; // Ombra più grande all'hover
        });
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 6px 12px rgba(0, 102, 255, 0.25)'; // Ripristina ombra
        });
    }

    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) { // Controlla se gli elementi esistono
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            this.classList.toggle('fa-times'); // Cambia icona da hamburger a X
            this.classList.toggle('fa-bars'); // Assicura che l'icona bars venga rimossa
        });

        // Chiudi il menu quando si clicca su un link (utile per single page applications o per navigazione rapida)
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    menuToggle.classList.remove('fa-times');
                    menuToggle.classList.add('fa-bars');
                }
            });
        });
    }

    // Aggiorna l'anno nel footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});