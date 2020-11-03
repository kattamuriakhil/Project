AOS.init();
$(".carousel").carousel({
  interval: 4000
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
