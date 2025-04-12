console.log("this is a scss project");

const menuButton = document.querySelector(".menuButton");
const closeModal = document.getElementById("close");
const modal = document.getElementById("myModal");
const bookMark = document.querySelector(".bookmark");

const bookMarkButton = document.getElementById("circle");
const path = document.getElementById("path");
const bookMarkText = document.getElementById("bookmarkText");

const menuModal = document.getElementById("back_this_project");
const backButton = document.getElementById("back_button");
const closeMenuModal = document.getElementById("close_menu");

const radios = document.querySelectorAll('input[name="Pledge"]');
const itemIds = ["firstItem", "secondItem", "thirdItem"];

const thanksModalMessage = document.getElementById("thanksModal");
const closeThanksModal = document.querySelector(".got_it_button");

const bambooStand = document.getElementById("bambooStand");
const blackStand = document.getElementById("blackStand");

menuButton.addEventListener("click", openMenu);
closeModal.addEventListener("click", closeMenu);

bookMark.addEventListener("click", bookMarkClicked);

backButton.addEventListener("click", openModalOptions);
closeMenuModal.addEventListener("click", closeModalOptions);

closeThanksModal.addEventListener("click", closeMessage);

bambooStand.addEventListener("click", openModalOptions);
blackStand.addEventListener("click", openModalOptions);

itemIds.forEach((id) => {
  const item = document.getElementById(id);
  if (item) {
    item.addEventListener("click", thanksModal);
  }
});

function thanksModal() {
  thanksModalMessage.classList.add("active_Modal_message");
  menuModal.classList.remove("active_Modal");
  resetRadioButtons();
}

function closeMessage() {
  thanksModalMessage.classList.remove("active_Modal_message");
}

function openModalOptions() {
  menuModal.classList.add("active_Modal");
}

function closeModalOptions() {
  menuModal.classList.remove("active_Modal");
  resetRadioButtons();
}

function openMenu() {
  modal.classList.add("active");
  menuButton.classList.add("close");
}

function closeMenu() {
  modal.classList.remove("active");
  menuButton.classList.remove("close");
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    modal.classList.remove("active");
    menuButton.classList.remove("close");
  }
});

function bookMarkClicked() {
  bookMarkButton.classList.toggle("circle");
  path.classList.toggle("path");
  bookMarkText.classList.toggle("bookmark_text");

  // Toggle the text content
  if (bookMarkText.textContent === "Bookmark") {
    bookMarkText.textContent = "Bookmarked";
  } else {
    bookMarkText.textContent = "Bookmark";
  }
}

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    document.querySelectorAll(".sub_box_two").forEach((box) => {
      box.classList.remove("selected");
    });

    document.querySelectorAll(".enter_pledge").forEach((info) => {
      info.classList.remove("active_show");
    });

    if (radio.checked) {
      const box = radio.closest(".sub_box_two");
      box.classList.add("selected");

      const extraInfo = box.querySelector(".enter_pledge");
      if (extraInfo) {
        extraInfo.classList.add("active_show");
      }
    }
  });
});

function resetRadioButtons() {
  radios.forEach((radio) => {
    radio.checked = false;
  });

  document.querySelectorAll(".sub_box_two").forEach((box) => {
    box.classList.remove("selected");
  });

  document.querySelectorAll(".enter_pledge").forEach((info) => {
    info.classList.remove("active_show");
  });
}
