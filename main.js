'use strict';
let slider = document.querySelector('.slider img')
let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
let right = document.querySelector('.right')
let left = document.querySelector('.left')
let currentImage = 0
slider.src = images[currentImage]
slider.alt = images[currentImage]

right.addEventListener('click', function() {
    currentImage++
    if (currentImage >= images.length) {
        currentImage = 0
    }
    slider.src = images[currentImage]
    slider.alt = images[currentImage]
})

left.addEventListener('click', function() {
    currentImage--
    if (currentImage < 0) {
        currentImage = images.length - 1
    }
    slider.src = images[currentImage]
    slider.alt = images[currentImage]
})