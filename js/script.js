console.log('¡Hola desde Node.js!');
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    menuToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
});

function openModal(element) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    modal.style.display = 'flex';
    modalImg.src = element.querySelector('img').src;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Mostrar o esconder el botón en función del scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Ajusta el valor según tu preferencia
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Desplazamiento suave hacia arriba al hacer clic
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});