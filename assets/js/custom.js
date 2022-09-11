$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $(".MYNavbar").addClass("navbar-scroll");
    } else {
      $(".MYNavbar").removeClass("navbar-scroll");
    }
  });
});
