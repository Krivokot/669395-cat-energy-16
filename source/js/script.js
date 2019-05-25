document.getElementById('navi').classList.add("main-nav__list");

var link = document.querySelector(".main-nav__toggle");
var popup = document.querySelector(".main-nav__list");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("main-nav__show");
  link.classList.toggle("main-nav__toggle-menu");
});
