var slide1 = document.querySelector (".slide1");
var slide2 = document.querySelector (".slide2");
var slide3 = document.querySelector (".slide3");

var button1 = document.querySelector (".slide-browsing1");
var button2 = document.querySelector (".slide-browsing2");
var button3 = document.querySelector (".slide-browsing3");

var body = document.querySelector ("body");

button1.addEventListener("click", function (evt) {
	evt.preventDefault();
	slide1.classList.add("slide-active");
	button1.classList.add("slide-browsing-active");
	slide2.classList.remove("slide-active");
	button2.classList.remove("slide-browsing-active");
	slide3.classList.remove("slide-active");
	button3.classList.remove("slide-browsing-active");
	body.classList.add("slide-image1");
	body.classList.remove("slide-image2");
	body.classList.remove("slide-image3");
});

button2.addEventListener("click", function (evt) {
	evt.preventDefault();
	slide1.classList.remove("slide-active");
	button1.classList.remove("slide-browsing-active");
	slide2.classList.add("slide-active");
	button2.classList.add("slide-browsing-active");
	slide3.classList.remove("slide-active");
	button3.classList.remove("slide-browsing-active");
	body.classList.remove("slide-image1");
	body.classList.add("slide-image2");
	body.classList.remove("slide-image3");
});

button3.addEventListener("click", function (evt) {
	evt.preventDefault();
	slide1.classList.remove("slide-active");
	button1.classList.remove("slide-browsing-active");
	slide2.classList.remove("slide-active");
	button2.classList.remove("slide-browsing-active");
	slide3.classList.add("slide-active");
	button3.classList.add("slide-browsing-active");
	body.classList.remove("slide-image1");
	body.classList.remove("slide-image2");
	body.classList.add("slide-image3");
});