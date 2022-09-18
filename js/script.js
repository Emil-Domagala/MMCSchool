const navWrapper = document.querySelector(".nav__wrapper");
const navBtn = document.querySelector(".burger-btn");

function showMenu() {
	navWrapper.classList.toggle("nav__wrapper--active");
}

navBtn.addEventListener("click", showMenu);
