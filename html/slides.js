let currentSlide = 0;
let slides = document.getElementsByClassName("slide");
let numSlides = slides.length;

function mod(n, m) {
	return (((n % m) + m) % m);
}

function resize() {
	let slideContainer = document.querySelector(".slide-container");
	let ratio = window.innerWidth / window.innerHeight;
	if (ratio > 4/3) {
		slideContainer.style.setProperty("height", "100%");
		let width = slideContainer.offsetHeight * 4/3;
		slideContainer.style.setProperty("width", width + "px");
	} else {
		slideContainer.style.setProperty("width", "100%");
		let height = slideContainer.offsetWidth * 3/4;
		slideContainer.style.setProperty("height", height + "px");
	}
	let fontSize = slideContainer.offsetHeight * 0.035;
	slideContainer.style.setProperty("font-size", fontSize + "px");
}

addEventListener("resize", resize);
addEventListener("keydown", (e) => {
	slides[currentSlide].classList.remove("active");
	if (e.code == "ArrowLeft") {
		currentSlide = mod((currentSlide - 1), numSlides);
	}
	if ((e.code == "ArrowRight") || (e.code == "Space")) {
		currentSlide = mod((currentSlide + 1), numSlides);
	}
	slides[currentSlide].classList.add("active");
});
addEventListener("click", (e) => {
	slides[currentSlide].classList.remove("active");
	if (e.x < (window.innerWidth / 2)) {
		currentSlide = mod((currentSlide - 1), numSlides);
	}
	if (e.x > (window.innerWidth / 2)) {
		currentSlide = mod((currentSlide + 1), numSlides);
	}
	slides[currentSlide].classList.add("active");
});


addEventListener("load", () => {
	slides[currentSlide].classList.add("active");
	resize();
})
