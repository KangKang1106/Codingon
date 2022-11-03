const card = document.querySelector(".card_1");
const post = document.querySelector(".city_card");
const card_2 = document.querySelector(".card_2");
const post_2 = document.querySelector(".city_card_2");
const body = document.querySelector("body");
const video = document.querySelector(".video");

card.addEventListener("click", function () {
  post.classList.toggle("hidden");
  body.style.backgroundColor = "gray";
  video.style.opacity = "0.5";
});

post.addEventListener("click", function () {
  post.classList.toggle("hidden");
  body.style.backgroundColor = "white";
  video.style.opacity = "1";
});

card_2.addEventListener("click", function () {
  post_2.classList.toggle("hidden");
  body.style.backgroundColor = "gray";
  video.style.opacity = "0.5";
});

post_2.addEventListener("click", function () {
  post_2.classList.toggle("hidden");
  body.style.backgroundColor = "white";
  video.style.opacity = "1";
});

card.addEventListener("hover", function () {
  card;
});
