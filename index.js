// card carousel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// dark and night toggler
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("navText").classList.toggle("navbar-dark")
  for(i=1;i<=6;i++){
    var str="Dark";
    str=str+String(i);
    document.getElementById(str).classList.toggle("projectDark");
  }
  for(i=1;i<=8;i++){
    var str="Icon";
    str=str+String(i);
    document.getElementById(str).classList.toggle("textDark");
  }
})
