AOS.init();
scrollFunction();
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").classList.add("scrolled");
    // document.querySelector(".headerinner").classList.remove("border-b");
  } else {
    document.querySelector("header").classList.remove("scrolled");
    // document.querySelector(".headerinner").classList.add("border-b");
  }
};