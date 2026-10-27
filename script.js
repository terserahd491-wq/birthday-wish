
const card = document.getElementById("birthdayCard");
const cover = card.querySelector(".imgBox");

cover.addEventListener("click", () => {
    card.classList.toggle("open");
});