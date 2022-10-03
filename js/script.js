const navWrapper = document.querySelector(".nav__wrapper");
const navBtn = document.querySelector(".burger-btn");
const acc = document.querySelectorAll(".acordeon-section__btn");
const plus = document.querySelectorAll(".fa-plus");
const minus = document.querySelectorAll(".fa-minus");
const faHide = document.querySelectorAll(".fa-hide");

function showMenu() {
	navWrapper.classList.toggle("nav__wrapper--active");
}

//Acordeon

let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("button-active");
		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}




//kewin
// acoSecBtn.forEach((item) => {
// 	item.addEventListener("click", () => {
// 		let acordeon = item.querySelector(".acordeon-section__hidden-text");
// 		console.log(acordeon);
// 		acordeon.classList.toggle("hide-text-accordeon");
// 	});
// });

navBtn.addEventListener("click", showMenu);
