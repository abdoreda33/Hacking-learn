let Navbar = document.querySelector(".navbar");
let Fabars = document.querySelector(".fa-bars");
let closebar = document.querySelector(".closebar");
Fabars.onclick = () => {
  Navbar.classList.toggle("active");
  Fabars.style.display = "none";
  closebar.style.display = "block";
};

closebar.onclick = () => {
  Navbar.classList.remove("active");
  Fabars.style.display = "block";
  closebar.style.display = "none";
};

const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleMediaQueryChange(event) {
  if (event.matches) {
    // الشاشة صغيرة، قم بإظهار Fabars
    Fabars.style.display = "block";
  } else {
    // الشاشة كبيرة، قم بإخفاء Fabars
    Fabars.style.display = "none";
  }
}
// قم بتسجيل الاستماع إلى تغييرات حجم الشاشة
mediaQuery.addListener(handleMediaQueryChange);

// قم بتشغيل الكود للمرة الأولى
handleMediaQueryChange(mediaQuery);
var swiper = new Swiper(".home-slid", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".team-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: {
        delay: 700,
        disableOnInteraction: false,
      },
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
