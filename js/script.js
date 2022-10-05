//showMenu
const navWrapper = document.querySelector(".nav__wrapper");
const navBtn = document.querySelector(".burger-btn");
//Acordeon
const acc = document.querySelectorAll(".acordeon-section__btn");
// const plus = document.querySelectorAll(".fa-plus");
// const minus = document.querySelectorAll(".fa-minus");
// const faHide = document.querySelectorAll(".fa-hide");
//scrollSpy
let section = document.querySelectorAll("section");
let navItem = document.querySelectorAll(".nav__item");
//Filter courses
let coursesBtn = document.querySelectorAll(".courses__nav--btn");
let coursesBtnv2 = document.querySelectorAll(".btn-special-animation");

function showMenu() {
	navWrapper.classList.toggle("nav__wrapper--active");
}


// const coursesFilter = () => {
// 	coursesBtn.classList.toggle("btn-special-animation-active");

// 	coursesBtn.forEach((item) => {
// 		item.addEventListener("click", () => {
// 			coursesBtn.classList.remove("btn-special-animation-active");
// 		});
// 	});
// };

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

//ScrollSpy

window.onscroll = () => {
	section.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 81;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");

		if ((top >= offset) & (top < offset + height)) {
			navItem.forEach((links) => {
				links.classList.remove("nav__item--active");
				document
					.querySelector(".nav__item[href*=" + id + "]")
					.classList.add("nav__item--active");
			});
		} else {
		}
	});
};

navBtn.addEventListener("click", showMenu);

