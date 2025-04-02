console.log("this is a scss project");

const menuButton = document.querySelector(".menuButton");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("close");

menuButton.addEventListener("click", openMenu);
closeModal.addEventListener("click", closeMenu);

function openMenu() {
  modal.classList.add("active");
  menuButton.classList.add("close");
}

function closeMenu() {
  modal.classList.remove("active");
  menuButton.classList.remove("close");
}
