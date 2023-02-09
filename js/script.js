//showMenu
const navWrapper = document.querySelector(".nav__wrapper");
const navBtn = document.querySelector(".burger-btn");
//nav btn
const navBtnHover = document.querySelector(".bourger-btn-hover");
//Acordeon
const acc = document.querySelectorAll(".acordeon-section__btn");
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

function navBtnAnimation() {
	navBtn.classList.toggle("bourger-btn-hover");
}

//Acordeon

const callEvent = (els) => {
	els.forEach((el) => {
		el.addEventListener("click", (e) => {
			el.classList.toggle("button-active");
			let panel = el.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
			let plus = el.firstElementChild;
			plus.classList.toggle("fa-hide");
			let minus = el.lastElementChild;
			minus.classList.toggle("fa-hide");
			els.forEach((lm) => {
				// lm !== el;
				if (lm !== el) {
					lm.classList.remove("button-active");
					let panel = lm.nextElementSibling;
					panel.style.maxHeight = null;
					let plus = lm.firstElementChild;
					plus.classList.remove("fa-hide");
					let minus = lm.lastElementChild;
					minus.classList.add("fa-hide");
				}
			});
		});
	});
};
callEvent(acc);

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
navBtn.addEventListener("click", navBtnAnimation);

courseBtnAll.addEventListener("click", allBtn);
courseBtnHTML.addEventListener("click", htmlBtn);
courseBtnJS.addEventListener("click", jsBtn);
courseBtnFree.addEventListener("click", freeBtn);
