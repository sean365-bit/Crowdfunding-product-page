console.log("this is a scss project");

const menuButton = document.querySelector(".menuButton");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("close");
const bookMark = document.querySelector(".bookmark");

const bookMarkButton = document.getElementById("circle");
const path = document.getElementById("path");
const bookMarkText = document.getElementById("bookmarkText");

menuButton.addEventListener("click", openMenu);
closeModal.addEventListener("click", closeMenu);
bookMark.addEventListener("click", bookMarkClicked);

function openMenu() {
  modal.classList.add("active");
  menuButton.classList.add("close");
}

function closeMenu() {
  modal.classList.remove("active");
  menuButton.classList.remove("close");
}

function bookMarkClicked() {
  bookMarkButton.classList.toggle("circle");
  path.classList.toggle("path");
  bookMarkText.classList.toggle("bookmark_text");
}
