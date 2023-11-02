gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

let popup = document.querySelector(".popup");
let closePopup = document.querySelector(".bi-x-lg");

//Fermer popup
closePopup.addEventListener("click", function(){
    popup.style.display = "none";
})

//Stocker X cliqué en local storage

//Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //Animation page 404

  gsap.to('.no1', {
    motionPath: {
      align: '#pathFall',
      path: '#pathFall',
    },
    duration: 10,
    ease: "power1.inOut",
  })
  
  gsap.timeline()
  .to(".no1", {rotate: "-20deg", delay: 0.3, duration: 3.3, ease: "power1.in"})
  .to(".no1", {rotate: "20deg", delay: 0.3, duration: 1.1, ease: "power1.in"})
  .to(".no1", {rotate: "-20deg", delay: 0.3, duration: 1.2, ease: "power1.in"})
  .to(".no1", {rotate: "0deg", delay: 0.3, duration: 2.8, ease: "power1.in"})

  gsap.to('.no2', {
    motionPath: {
      align: '#pathWind',
      path: '#pathWind',
      autoRotate: true,
    },
    duration: 6,
    repeat: -1,
    delay: 1,
  })

  gsap.timeline()
  .from(".no2", {opacity: 1})
  .to(".no2", {opacity: 0, duration: 0.5})
  .to(".no2", {opacity: 1, duration: 3.5})
  .to(".no2", {opacity: 0, duration: 2})