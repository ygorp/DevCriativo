const btnAbrir = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

btnAbrir.addEventListener('click', () => {
  menu.classList.toggle('menu-mobile--aberto');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile--aberto');
});


overlay.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile--aberto');
});