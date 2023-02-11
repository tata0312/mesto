const popup = document.querySelector(".popup");
const popupOpenedBtn = document.querySelector(".profile__edit-button");
const popupCloseBtn = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__form");
const main = document.querySelector("main");

const profileName = document.querySelector(".profile__name");
const profilePost = document.querySelector(".profile__post");
const inputName = document.querySelector(".popup__input_name");
const inputPost = document.querySelector(".popup__input_post");

popupOpenedBtn.addEventListener("click", function () {
    popup.classList.add("popup_opened");
    inputName.value = profileName.textContent;
    inputPost.value = profilePost.textContent;
});

popupCloseBtn.addEventListener("click", function () {
    popup.classList.remove("popup_opened");
});

popupForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profilePost.textContent = inputPost.value;
    popup.classList.remove("popup_opened");
});