const navWrapper = document.querySelector(".nav__wrapper");
const navBtn = document.querySelector(".burger-btn");
//do w3School
// var acc = document.querySelectorAll(".acordeon-section__btn");
// var i;
const acoSecText = document.querySelectorAll(".acordeon-section__hidden-text");
//do moich opcji
// const acoSecBtn = document.querySelectorAll(".acordeon-section__btn");

function showMenu() {
	navWrapper.classList.toggle("nav__wrapper--active");
}

//opcja której nie do końca rozumiem, chyba z tablicą
// const showHiddenText = () => {
// 	acoSecText.classList.toggle("hidden-text-show");
// 	acoSecBtn.forEach((item) => {
// 		item.addEventListener("click", () => {
// 			acoSecText.classList.remove("hidden-text-show");
// 		});
// 	});
// };

//łatwa opcja z funkcją liniową z dodaniem klasy max-height100%
// acoSecBtn.forEach((item) =>
// 	item.addEventListener("click", () => {
// 		acoSecText.classList.toggle("hidden-text-show");
// 	})
// );

//najłatwiejsza opcja z dodaniem klasy z max-height100%
// function showHiddenText() {
// 	acoSecText.classList.toggle("hidden-text-show");
// }

//To znalazłem na w3schools i trochę przerobiłem
// for (i = 0; i < acc.length; i++) {
// 	acc[i].addEventListener("click", function () {
// 		this.classList.toggle("hidden-text-show");
// 		var panel = document.querySelectorAll(".acordeon-section__hidden-text");
// 		if (panel.style.maxHeight) {
// 			panel.style.maxHeight = null;
// 		} else {
// 			panel.style.maxHeight = panel.scrollHeight + "px";
// 		}
// 	});
// }

navBtn.addEventListener("click", showMenu);
// acoSecBtn.addEventListener("click", showHiddenText);
