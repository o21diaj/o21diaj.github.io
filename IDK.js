function myFubction() {
	var x = document.getElementByID("NavHotbar");
	if (x.className === "Hotbar") {
		x.className += " responsive";
	} else {
		x.className = "Hotbar"
	}
}