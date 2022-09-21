const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel__btn--right');
const prevBtn = document.querySelector('.carousel__btn--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);
const str1 = ["Full Meals","Non-Veg","Desserts"];
const str2 = ["Flat 20% off*","Flat 10% off*","Flat 5% off*"];


const slidesWidth = slides[0].getBoundingClientRect().width;

const setSlidePostion = (slide, index) => {
    slide.style.left = slidesWidth * index + 'px';
}
slides.forEach(setSlidePostion);

const moveSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const upadteDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevBtn, nextBtn ,targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }
    else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    }
    else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }
}

prevBtn.addEventListener('click',e=> {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    
    document.getElementById('heading').innerHTML = str1[prevIndex];
    document.getElementById('price').innerHTML = str2[prevIndex];
    moveSlide(track, currentSlide, prevSlide);
    upadteDots(currentDot, prevDot);
    hideShowArrows(slides, prevBtn, nextBtn ,prevIndex);
})

nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    document.getElementById('heading').innerHTML = str1[nextIndex];
    document.getElementById('price').innerHTML = str2[nextIndex];
    moveSlide(track, currentSlide, nextSlide);
    upadteDots(currentDot, nextDot);
    hideShowArrows(slides, prevBtn, nextBtn ,nextIndex);
})

dotsNav.addEventListener('click',e=>{
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    document.getElementById('heading').innerHTML = str1[targetIndex];
    document.getElementById('price').innerHTML = str2[targetIndex];
    moveSlide(track, currentSlide, targetSlide);
    upadteDots(currentDot, targetDot);
    hideShowArrows(slides, prevBtn, nextBtn ,targetIndex);
})