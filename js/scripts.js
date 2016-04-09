
$(document).on("ready",init);


  function init(){

    $(".down-arrow").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#aboutUs").offset().top
        }, 1000);
    });
    $("#about").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#aboutUs").offset().top
        }, 1000);
    });

    $("#home").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#head").offset().top
        }, 1000);
    });

    $("#service").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 1000);
    });

    $("#work").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#works").offset().top
        }, 1000);
    });

    $("#price").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#prices").offset().top
        }, 1000);
    });

    $("#client").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#clients").offset().top
        }, 1000);
    });

    $("#cont").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $("#home").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#head").offset().top
        }, 1000);
    });



    var $botonNav = $("#openMenu");
    var $navList = $(".nav");
    var $cerrado = $("#close");

    $botonNav.click(function(event){
      event.preventDefault();
      $navList.slideDown();
    });

    $cerrado.click(function(event){
      event.preventDefault();
      $navList.slideUp();
    });

        
    
    





  $('.sliding').slick({
    infinite: true,
    easing: 'swing',
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.rotate-left'),
    nextArrow: $('.rotate-right'),
    dots: true,
    responsive: [
    {
        breakpoint: 960,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        adaptiveHeight: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.slick-dots button').remove();
  $('.slick-dots li:nth-child(1)').append('<div class="pager"></div>');
  $('.slick-dots li:nth-child(2)').append('<div class="pager"></div>');
  $('.slick-dots li:nth-child(3)').append('<div class="pager"></div>');
  $('.slick-dots li:nth-child(4)').append('<div class="pager"></div>');


  $(".testimony-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.none'),
    nextArrow: $('.none'),
    dots: true
  });


  $('.testimonials .slick-dots button').remove();
  $('.testimonials .slick-dots li:nth-child(1)').append('<div class="btn btn-slider pager pager--testimony"></div>');
  $('.testimonials .slick-dots li:nth-child(2)').append('<div class="btn btn-slider pager pager--testimony"></div>');
  $('.testimonials .slick-dots li:nth-child(3)').append('<div class="btn btn-slider pager pager--testimony"></div>');
  $('.testimonials .slick-dots li:nth-child(4)').append('<div class="btn btn-slider pager pager--testimony"></div>');
  $('.testimonials .slick-dots').css('bottom','-50px');
}

//$('.testimonials .slick-dots button').remove();
//$('.testimonials .slick-dots li').addClass('pager pager--testimony');
//$('.testimonials .slick-dots').css('bottom','-50px');




/*
var currentIndex = 0,
  items = $('.container>div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.container>div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 50000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});
*/