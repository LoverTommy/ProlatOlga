'use strict'

// burger //

let burgerIcon = document.getElementById('burger-icon');
let instaIcon = document.getElementById('insta');
let burgerMenu = document.getElementById('burger-menu');
let closeBurgerMenu = document.getElementById('close-burger-menu');


document.querySelector('#burger-icon').onclick = function() {
    burgerMenu.style.cssText = 'display: grid; animation-name: burger-animation-open; animation-duration: 0.8s';
    burgerIcon.style.cssText = 'display: none';
    instaIcon.style.cssText = 'display: none';
}

document.querySelector('#close-burger-menu').onclick = function() {
    burgerMenu.style.cssText = 'display: none';
    burgerIcon.style.cssText = 'display: block';
    instaIcon.style.cssText = 'display: block';
}

let arrowItem1 = document.getElementById('arrowItem1');
let openItem1 = document.getElementById('openItem1');

document.querySelector('#arrowItem1').onclick = function() {
    document.querySelector('#arrowItem1').classList.toggle('openArrow1');
    document.querySelector('#openItem1').classList.toggle('openItem1');
    document.querySelector('#arrowItem1').onclick = function() {
        document.querySelector('#arrowItem1').classList.toggle('closeArrow1');
        document.querySelector('#openItem1').classList.toggle('closeItem1');
    }
}

document.querySelector('#arrowItem2').onclick = function() {
    document.querySelector('#arrowItem2').classList.toggle('openArrow2');
    document.querySelector('#openItem2').classList.toggle('openItem2');
    document.querySelector('#arrowItem2').onclick = function() {
        document.querySelector('#arrowItem2').classList.toggle('closeArrow2');
        document.querySelector('#openItem2').classList.toggle('closeItem2');
    }
}

document.querySelector('#arrowItem3').onclick = function() {
    document.querySelector('#arrowItem3').classList.toggle('openArrow3');
    document.querySelector('#openItem3').classList.toggle('openItem3');
    document.querySelector('#arrowItem3').onclick = function() {
        document.querySelector('#arrowItem3').classList.toggle('closeArrow3');
        document.querySelector('#openItem3').classList.toggle('closeItem3');
    }
}

document.querySelector('#arrowItem4').onclick = function() {
    document.querySelector('#arrowItem4').classList.toggle('openArrow4');
    document.querySelector('#openItem4').classList.toggle('openItem4');
    document.querySelector('#arrowItem4').onclick = function() {
        document.querySelector('#arrowItem4').classList.toggle('closeArrow4');
        document.querySelector('#openItem4').classList.toggle('closeItem4');
    }
}