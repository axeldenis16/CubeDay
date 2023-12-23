
const swiper = new Swiper('.swiper-container', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,
   spaceBetween: 30,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
      zoom: {
        maxRatio: 3,
      },
});
