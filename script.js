console.log("this is a scss project");

const menuButton = document.querySelector(".menuButton");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("close");
const bookMark = document.querySelector(".bookmark");

const bookMarkButton = document.getElementById("circle");
const path = document.getElementById("path");
const bookMarkText = document.getElementById("bookmarkText");

const menuModal = document.getElementById("back_this_project");
const backButton = document.getElementById("back_button");
const closeMenuModal = document.getElementById("close_menu");

menuButton.addEventListener("click", openMenu);
closeModal.addEventListener("click", closeMenu);
bookMark.addEventListener("click", bookMarkClicked);

backButton.addEventListener("click", openModalOptions);
closeMenuModal.addEventListener("click", closeModalOptions);

function closeModalOptions() {
  menuModal.classList.remove("active_Modal");
}

function openModalOptions() {
  menuModal.classList.add("active_Modal");
}

function openMenu() {
  modal.classList.add("active");
  menuButton.classList.add("close");
}

function closeMenu() {
  modal.classList.remove("active");
  menuButton.classList.remove("close");
}

/*
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    // navMenu.classList.remove("active"); // Hide the mobile menu
    modal.classList.remove("active");
  }
});
*/

function bookMarkClicked() {
  bookMarkButton.classList.toggle("circle");
  path.classList.toggle("path");
  bookMarkText.classList.toggle("bookmark_text");
}
