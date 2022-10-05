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
const courseBtnAll = document.querySelector(".courses__nav--btn-all");
const courseBtnHTML = document.querySelector(".courses__nav--btn-html");
const courseBtnJS = document.querySelector(".courses__nav--btn-js");
const courseBtnFree = document.querySelector(".courses__nav--btn-free");
const courseHTML = document.querySelector("#courses__htmlAcss");
const courseJS = document.querySelector("#courses__js");
const courseFree = document.querySelector("#courses__free");


//show menu
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

//Filter courses

function allBtn() {
	courseBtnAll.classList.add("btn-special-animation-active");
	courseBtnHTML.classList.remove("btn-special-animation-active");
	courseBtnJS.classList.remove("btn-special-animation-active");
	courseBtnFree.classList.remove("btn-special-animation-active");
	courseHTML.classList.remove("hide");
	courseJS.classList.remove("hide");
	courseFree.classList.remove("hide");
}
function htmlBtn() {
	courseBtnAll.classList.remove("btn-special-animation-active");
	courseBtnHTML.classList.add("btn-special-animation-active");
	courseBtnJS.classList.remove("btn-special-animation-active");
	courseBtnFree.classList.remove("btn-special-animation-active");
	courseHTML.classList.remove("hide");
	courseJS.classList.add("hide");
	courseFree.classList.add("hide");
}
function jsBtn() {
	courseBtnAll.classList.remove("btn-special-animation-active");
	courseBtnHTML.classList.remove("btn-special-animation-active");
	courseBtnJS.classList.add("btn-special-animation-active");
	courseBtnFree.classList.remove("btn-special-animation-active");
	courseHTML.classList.add("hide");
	courseJS.classList.remove("hide");
	courseFree.classList.add("hide");
}
function freeBtn() {
	courseBtnAll.classList.remove("btn-special-animation-active");
	courseBtnHTML.classList.remove("btn-special-animation-active");
	courseBtnJS.classList.remove("btn-special-animation-active");
	courseBtnFree.classList.add("btn-special-animation-active");
	courseHTML.classList.add("hide");
	courseJS.classList.add("hide");
	courseFree.classList.remove("hide");
}


navBtn.addEventListener("click", showMenu);
courseBtnAll.addEventListener("click", allBtn);
courseBtnHTML.addEventListener("click", htmlBtn);
courseBtnJS.addEventListener("click", jsBtn);
courseBtnFree.addEventListener("click", freeBtn);
