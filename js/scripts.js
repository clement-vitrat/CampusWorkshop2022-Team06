
// SCRIPT DU MENU (BARRE DE NAVIGATION)
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

// Fonction qui permet de cliquer
toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

