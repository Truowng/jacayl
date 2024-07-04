if (document.querySelector(".banner-fullsize .swiper")) {
  const bannerFullSize = new Swiper(".banner-fullsize .swiper", {
    direction: "horizontal",
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    effect: "fade",
  });
}

if (document.querySelector(".testimonials .testimonials-slider .swiper")) {
  const testimonialsSlider = new Swiper(
    ".testimonials .testimonials-slider .swiper",
    {
      direction: "horizontal",
      speed: 500,
      autoplay: {
        delay: 5000,
      },
      spaceBetween: 40,
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
      },
    }
  );
}
