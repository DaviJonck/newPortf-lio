const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');



function toggleMenu() {
    menu.classList.toggle('show-menu');
    document.body.classList.toggle('no-scroll');
}

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

/* FUNCAO PARA APARECER LETRA POR LETRA */
const slowReveal = document.querySelector('.slowreveal');
const text = 'Desenvolvedor FullStack.';
let i = 0;

function revealLetter() {
    slowReveal.innerHTML += text.charAt(i);
    slowReveal.style.opacity = 1;
    i++;
    if (i < text.length) {
        setTimeout(revealLetter, 100);
    }
}

revealLetter();



/* Funcao para revelar os quadrados do my skills*/
function revealSquares() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square, index) => {
        setTimeout(() => {
            square.classList.add('reveal');
        }, (index + 1) * 300);
    });
}

let revealed = false;
window.addEventListener('scroll', () => {
    const distanceFromTop = window.scrollY;
    const threshold = 50;

    if (!revealed && distanceFromTop > threshold) {
        revealed = true;
        revealSquares();
    }
});

