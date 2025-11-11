const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
})


document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});