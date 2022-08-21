document.onkeydown = function (e) {
	if (e.code == 123) {
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.key == "I") {
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.code == "C") {
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.code == "J") {
		return false;
	}
	if (e.ctrlKey && e.key == "U".charCodeAt(0)) {
		return false;
	}
};
