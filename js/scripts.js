'use strict'

const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
let cost = 400;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked')) {
        event.target.classList.toggle('active');
        let active = schemeSvg.querySelectorAll('.active');
        totalPrice = cost * active.length;
        totalPriceTag.textContent = totalPrice;
    }
})

menuButton.addEventListener('click', () => {
    menu.classList.toggle('is-open');
})