document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector('.footerAll');
    var main = document.querySelector('main');

    function adjustMainMargin() {
        var footerHeight = footer.offsetHeight;
        main.style.marginBottom = footerHeight + 'px';
    }

    // Ajustar el margen del main inicialmente
    adjustMainMargin();

    function checkFooterVisibility() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // Mostrar el footer con fade-in
            footer.style.opacity = '1';
        } else {
            // Ocultar el footer
            footer.style.opacity = '0';
        }
    }

    // Agregar una transición para el cambio de opacidad
    footer.style.transition = 'opacity 1s ease-in-out';

    // Ocultar el footer inicialmente
    footer.style.opacity = '0';

    // Check visibility on scroll
    window.addEventListener('scroll', function() {
        checkFooterVisibility();
        adjustMainMargin(); // Ajustar el margen del main al hacer scroll
    });
});
