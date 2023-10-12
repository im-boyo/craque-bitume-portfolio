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