import { initHome } from "./home.js";

// Garante que o código só rode quando o HTML estiver 100% carregado
document.addEventListener('DOMContentLoaded', () => {
    initHome();

    const menuIcon = document.querySelector('.menu-icon');
    const navlist = document.querySelector('.navlist');

    if (menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('active');
            navlist.classList.toggle('active');
        };
    }

    // Fecha o menu ao clicar em um link (opcional, mas recomendado)
    document.querySelectorAll('.navlist li a').forEach(link => {
        link.onclick = () => {
            menuIcon.classList.remove('active');
            navlist.classList.remove('active');
        };
    });
});