$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $(".MYNavbar").addClass("navbar-scroll");
    } else {
      $(".MYNavbar").removeClass("navbar-scroll");
    }
  });
});
