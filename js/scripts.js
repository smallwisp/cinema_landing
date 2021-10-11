'use strict'

const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
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