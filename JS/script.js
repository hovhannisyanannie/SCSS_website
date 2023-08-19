const animateBoxes=document.querySelectorAll(".animate");
const searchBtn=document.querySelector("#navbar-search");
const searchBar=document.querySelector(".header__wrapper__search");
const burgerMenu=document.querySelector("#burger-menu");
const navbar=document.querySelector(".navbar");
const block=document.querySelector('.events-block');
const slider=document.querySelector('.events-body');
const more=document.querySelectorAll(".more");
const loadMore=document.querySelector("#load-more");


window.addEventListener("scroll", checkAnimate);

function checkAnimate(){
    const height=window.innerHeight;
    animateBoxes.forEach(animateBox=>{
        const top=animateBox.getBoundingClientRect().top;

        if(top<height){
            animateBox.classList.add("show");
            animateBox.classList.add("box");
        }else{
            animateBox.classList.remove("show")
        }
    })
}

checkAnimate()

searchBtn.addEventListener("click", ()=>{
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active")
});


burgerMenu.addEventListener("click", ()=>{
    burgerMenu.classList.toggle("fa-times");
    navbar.classList.toggle("active")
});



for(let i=0;i<more.length;i++){
  more[i].addEventListener("click",()=>{
    more[i].parentNode.parentNode.classList.toggle("active")
  })
}


var swiper = new Swiper(".events__swiper", {
    spaceBetween: 45,
    grabCursor: "true",
    speed: 1000,
    navigation: {
      nextEl: ".arrow-icon-right",
      prevEl: ".arrow-icon-left",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 25,
        
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  