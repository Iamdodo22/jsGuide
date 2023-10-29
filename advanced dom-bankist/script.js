'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const navBar = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');

const section1 = document.getElementById('section--1');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



// Events

btnScrollTo.addEventListener('click', e => section1.scrollIntoView({behavior: 'smooth'}));

navBar.addEventListener('click', function(e) {
  e.preventDefault()
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

//Tab operation
  const tabs = document.querySelectorAll('.operations__tab');
  const tabContainer = document.querySelector('.operations__tab-container');
  const tabContent = document.querySelectorAll('.operations__content');

  //event
  tabContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.operations__tab');
   
    // //Guard clause
    if(!clicked)return;

    // //remove active 
    tabs.forEach(t => t.classList.remove('operations__tab--active'))
    tabContent.forEach(c => c.classList.remove('operations__content--active'))

    // //activate tab
    clicked.classList.add('operations__tab--active');

    //activation content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
  })

 //menu fade animation
const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link)el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}

  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1));
  

  // sticky navbar
  
//  const sec1Top = section1.getBoundingClientRect().top
//   window.addEventListener('scroll', function(){
//     if(window.scrollY > sec1Top){
//       nav.classList.add('sticky');
      
//     }else{
//     nav.classList.remove('sticky');
//   }
//   })
//  console.log(sec1Top,window.scrollY)

//sticky navigation intersection observer API
  
  const navHeight = nav.getBoundingClientRect().height;
  const header =document.querySelector('.header');

  const stickyNav = function (enteries){
    const [entry] = enteries;

    if(!entry.isIntersecting)nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  }
  
  const headerObs = new IntersectionObserver(stickyNav, {
    root:null,
    threshold:0,
    rootMargin: `-${navHeight}px`
  })
  headerObs.observe(header)

// reveal sections
const allSection = document.querySelectorAll('.section')


const revealSect = function(entries, obs){
  const [entry] = entries;

  if(!entry.isIntersecting)return;
  entry.target.classList.remove('section--hidden');

  obs.unobserve(entry.target);


}

const sectionObs = new IntersectionObserver(revealSect, {
  root:null,
  threshold:0.15
})

allSection.forEach(function(section) {
  sectionObs.observe(section);
  section.classList.add('section--hidden');
})


//lazy loading performance
const imgTarget = document.querySelectorAll('img[data-src]');

const loadImg = function(entries,observer) {
  const [entry] = entries;
  if(!entry.isIntersecting)return;
  //replace src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target)
}

const imgObs = new IntersectionObserver(loadImg, {
  root:null,
  threshold:0,
  rootMargin: '200px'
})

imgTarget.forEach(img => imgObs.observe(img));

//building a slider

function slider() {
const slider = document.querySelector('.slider');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotCont = document.querySelector('.dots');

const slides = document.querySelectorAll('.slide');
slides.forEach((s,i) =>{
  s.style.transform = `translateX(${100 *i}%)`
  // 0%, 100%, 200%, 300%
} )

let curSlide = 0;
const maxSlide = slides.length;
function slideMove(slide) {
  slides.forEach((s,i) =>{
    s.style.transform = `translateX(${100 * (i -slide)}%)`
    // -100%, 0%, 100%, 200%
  } )
}

const createDots = function() {
  slides.forEach((_,i)=>{
    dotCont.insertAdjacentHTML('beforeEnd',
    `<button class="dots__dot" data-slide="${i}"></button>`)
  })
}

const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide ="${slide}"]`).classList.add('dots__dot--active');
};

function nextSlide() {
  if(curSlide === maxSlide - 1){
    curSlide = 0;
  }else curSlide++;

  slideMove(curSlide)
  activateDot(curSlide)
}

function prevSlide() {
  if(curSlide === 0){
    curSlide = maxSlide -1;
  }else curSlide--;
  slideMove(curSlide)
  activateDot(curSlide)
}

//init
function init() {
  slideMove(0)
  createDots()
  activateDot(0)
}
init()

// next slide
btnRight.addEventListener('click', nextSlide)

// prev slide
btnLeft.addEventListener('click', prevSlide)

//using keyboard arrow
document.addEventListener('keydown', function(e) {
  if(e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
})

//dot event
dotCont.addEventListener('click', function(e) {
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset;
    slideMove(slide);

    activateDot(slide)
  }
  
})
}
slider()

document.addEventListener('DOMContentLoaded', function(e) {
  console.log('tree', e)
})

window.addEventListener('load', function(e) {
  console.log('fully loaded', e)
})

window.addEventListener('beforeunload', function(e) {
  e.preventDefault();
  console.log(e,'skibi');
  e.returnValue = 'yayyy'
})
// L E C T U R E ......

// prepend()... appear as first child and append() appear as last child

//.remove()... a faster way to delete element----// brfore... parentElement.removeChild()

// for style
// get computed style() .. to get non inline style e.g height 0f 120% it will give exact value
//set property(,).. useful with varaiables ..

// scrolling...
//we use .getBoundingClientRect
// before we use window.scrollTo(x + window.pageXOffset,y + window.pageYOffset,behavior:'smooth').....
// now we use --- position.scrollIntoView({behavior: 'smooth'})

//events
//mouseEnter work just like hover
//.removeEventListener()... to remove event after adding.
//bubbling and captuiring.
//propagation of event from parent target to their child ..(capturing show this third params true in an addevent method to true by default false) while bubbling show from target to the parent node....to stop the target from bubbling we use ---  .stop propagation 

// the --this-- in an event stands for the current target of an event.or handler..