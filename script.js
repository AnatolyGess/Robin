// Burger button
const body = document.querySelector('body');
const burgerBtn = document.querySelector('.burger-btn');
const headerNav = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
    body.classList.toggle('active-menu');
    burgerBtn.classList.toggle('active-menu');
    headerNav.classList.toggle('active-menu');
}


// Change header background here
const header = document.querySelector('.header');

window.addEventListener('scroll', changeHeaderBackground);

function changeHeaderBackground() {
    const windowScrollTop = window.scrollY;

    windowScrollTop < 1 ? header.classList.remove('black') : header.classList.add('black');
}


// Photo`s gallery moment
const galleryTagList = document.querySelectorAll('.gallery__tag');
const galleryImagesList = document.querySelectorAll('.gallery__images');

galleryTagList.forEach(e => {
    e.addEventListener('click', galleryToggler);
});

function galleryToggler(event) {
    galleryTagList.forEach(e => e.classList.remove('gallery__tag--active'));
    event.currentTarget.classList.add('gallery__tag--active');
    
    galleryImagesList.forEach(e => {
        e.classList.remove('gallery__images--active');
    });

    const activeTag = document.querySelector('.gallery__tag.gallery__tag--active').innerHTML;
    document.querySelector(`#${activeTag}`).classList.add("gallery__images--active");
}