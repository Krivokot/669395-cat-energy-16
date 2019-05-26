document.getElementById('navi').classList.add("main-nav__list");

var link = document.querySelector(".main-nav__toggle");
var popup = document.querySelector(".main-nav__list");
var submit = document.querySelector(".main-form__submit");
var inputError = document.querySelector(".input");

var weight = document.querySelector("[name=weight]");
var name = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");
var phone = document.querySelector("[name=phone]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("main-nav__show");
  link.classList.toggle("main-nav__toggle-menu");
});

submit.addEventListener("click", function(evt) {
  if (!weight.value) {
    evt.preventDefault();
    weight.classList.add("input__error");
  } else {
    weight.classList.remove("input__error");
  }
  if (!name.value) {
    evt.preventDefault();
    name.classList.add("input__error");
  } else {
    name.classList.remove("input__error");
  }
  if (!email.value) {
    evt.preventDefault();
    email.classList.add("input__error");
  } else {
    email.classList.remove("input__error");
  }
  if (!phone.value) {
    evt.preventDefault();
    phone.classList.add("input__error");
  } else {
    phone.classList.remove("input__error");
  }
});
