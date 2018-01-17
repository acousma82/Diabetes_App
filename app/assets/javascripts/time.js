$(window).on("turbolinks:load", function () {
  setInterval(function () {
      $('.time-container').load('/users/get_time');

  }, 1000);
});