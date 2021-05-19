/** @format */

imgSource = document.getElementById("bldgrpimg").src;

bloodgrp = function (bldgrp) {
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
	} else {
		imgSource = "images/Blood-Types_AB-Negative.png";
	}
	return imgSource;
};
