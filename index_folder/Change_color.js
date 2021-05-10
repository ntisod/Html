function change_color(color) {
	for(i = 1; i < 8; i++) {
		var x = document.getElementById("change-" + i);
		x.classList.remove("black");
		x.classList.remove("cinnabar");
		x.classList.remove("burnt-orange");
		x.classList.remove("carrot-orange");
		x.classList.remove("turbo");
		x.classList.remove("lemon");
		x.classList.remove("limerick");
		x.classList.remove("water-course");
		x.classList.remove("curious-blue");
		x.classList.remove("governor-bay");
		x.classList.remove("affair");
		x.classList.remove("medium-violet-red");
		x.classList.add(color);
	}
	window.scrollTo({
		behavior: "smooth",
		top: 0
	});
}