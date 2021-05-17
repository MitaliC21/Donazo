/** @format */

const searchResults = axios.post("/receive");
console.log(searchResults);

function bloodgrp(bldgrp) {
	let imgSource = document.getElementById("img").src;
	if (bldgrp == "O+") {
		imgSource = "images/Blood-Types_O-Positive.png";
	} else if (bldgrp == "O-") {
		imgSource = "images/Blood-Types_O-Negative.png";
	} else if (bldgrp == "B+") {
		imgSource = "images/Blood-Types_B-Positive.png";
	} else if (bldgrp == "B-") {
		imgSource = "images/Blood-Types_B-Negative.png";
	} else if (bldgrp == "A+") {
		imgSource = "images/Blood-Types_A-Positive.png";
	} else if (bldgrp == "A-") {
		imgSource = "images/Blood-Types_A-Negative.png";
	} else if (bldgrp == "AB+") {
		imgSource = "images/Blood-Types_AB-Positive.png";
	} else if (bldgrp == "AB-") {
		imgSource = "images/Blood-Types_AB-Negative.png";
	}
}
