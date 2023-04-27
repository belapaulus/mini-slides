let currentSlide = 0;
let slides = document.getElementsByClassName("slide");

function mod(n, m) {
	return (((n % m) + m) % m);
}

// i == 1 goes to the next slide
// i == -1 goes to the previous slide
function changeSlide(i) {
	slides[currentSlide].classList.remove("active");
	currentSlide = mod((currentSlide + i), slides.length);
	slides[currentSlide].classList.add("active");
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
	if (e.code == "ArrowLeft") {
		changeSlide(-1);
	}
	if ((e.code == "ArrowRight") || (e.code == "Space")) {
		changeSlide(1);
	}
});

addEventListener("click", (e) => {
	if (e.x < (window.innerWidth / 2)) {
		changeSlide(-1);
	}
	if (e.x > (window.innerWidth / 2)) {
		changeSlide(1);
	}
});

addEventListener("load", () => {
	slides[currentSlide].classList.add("active");
	resize();
})
