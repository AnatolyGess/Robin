// Change header background here
const header = document.querySelector('.header');

window.addEventListener('scroll', changeHeaderBackground);

function changeHeaderBackground() {
    const windowScrollTop = window.pageYOffset;

    windowScrollTop < 1 ? header.classList.remove('dark') : header.classList.add('dark');
}


// Photo`s gallery moment
const galleryTagList = document.querySelectorAll('.gallery__tag');
const galleryImagesList = document.querySelectorAll('.gallery__images');

galleryTagList.forEach(e => {
    e.addEventListener('click', galleryToggler);
});

function galleryToggler(event) {
    galleryTagList.forEach(elem => elem.classList.remove('gallery__tag--active'));
    event.currentTarget.classList.add('gallery__tag--active');
    
    galleryImagesList.forEach(e => {
        e.classList.remove('gallery__images--active');
    });

    const activeTag = document.querySelector('.gallery__tag.gallery__tag--active').innerHTML;
    document.querySelector(`#${activeTag}`).classList.add("gallery__images--active");
}