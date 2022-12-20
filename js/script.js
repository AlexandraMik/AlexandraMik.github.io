document.addEventListener("DOMContentLoaded", function (_event) {
    const newSlider = new Swiper(".reviews__row", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        1400: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  
      navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
      },
    });
  });
  
  function swapValues() {
    const tmp = document.getElementById("from").value;
    document.getElementById("from").value = document.getElementById("to").value;
    document.getElementById("to").value = tmp;
  }