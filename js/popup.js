var link = document.querySelector(".popup-link");
var popup = document.querySelector(".popup");
var popupClose = popup.querySelector(".popup-close");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("popup-active");
});

popupClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("popup-active");
});