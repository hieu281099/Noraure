$(window).scroll(function(){
  if($(window).scrollTop()){
    $('.header-bottom').addClass('sticky');
  } else
  {
    $('.header-bottom').removeClass('sticky')
  }
})

$('.fa-search').click(function(){
  $('.search-form').toggleClass('active')
})

$('.fa-bars').click(function(){
  $('.header-bottom__menu__list').toggleClass('active')
  $('#nav').toggleClass('col-12')
})

//Slide show banner
$('#slideBanner').carousel({
  interval: 5000
})

//Slide show carousel-multiple
$('.carousel-multiple').carousel({
  interval: false,
  pause: true
})

$('.carousel-multiple .carousel-item').each(function() {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');

  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i <= minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
  }
});

$('.carousel .control').click(function () {
  $('.carousel .control').blur();
})

//style button to top
$(window).ready(function () {
  if($('.button-to-top').length > 0) {
    $(window).scroll(function () {
      if($(window).scrollTop() > 300)
        $('.button-to-top').show()
      else
        $('.button-to-top').hide()
    })
    $('.button-to-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000)
    })
  }
})