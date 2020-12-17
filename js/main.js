const toggleButton = document.querySelector("#toggle-menu-mobile");

const burgerIcon = document.querySelector("#burger-icon");
const closeIcon = document.querySelector("#close-icon");

const burgerMenu = document.querySelector("#menu");

toggleButton.addEventListener("click", () => {
  if (burgerMenu.style.display === "block") {
    console.log("disparition du menue");
    burgerIcon.style.display = "block";
    burgerMenu.style.display = "none";
    closeIcon.style.display = "none";
  } else {
    console.log("apparition du menu");
    burgerIcon.style.display = "none";
    burgerMenu.style.display = "block";
    closeIcon.style.display = "block";
  }
});
