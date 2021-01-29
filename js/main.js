$(document).ready(function(){
  $('.slider__list-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider__list-small'
  });
  $('.slider__list-small').slick({
    slidesToShow: 6,
    infinite: true,
    asNavFor: '.slider__list-big',
    dots: true,
    centerMode: false,
    focusOnSelect: true
  });
});