// Nav Bar JS

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


// Hero Sliders

    var swiper = new Swiper(".heroSlide", {
      spaceBetween: 30,
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-hero-right",
        prevEl: ".swiper-hero-left",
      },
    });

    // Student Resources Slider
var swiper = new Swiper(".studentResources", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-stu-next",
    prevEl: ".swiper-stu-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
