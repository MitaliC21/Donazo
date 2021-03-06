/** @format */
const button = document.querySelector('#button');
const searchid = document.querySelector('#select');
const div = document.getElementById('div');
const section = document.querySelector('section');
const history = document.querySelector('#history');



function bloodgrp(bldgrp) {

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
}



button.addEventListener('click', async function (e) {
	e.preventDefault();
	remove();
	const searchTerm = searchid.value;
	if (searchTerm != "") {
		const config = { q: searchTerm };
		const searchResults = await axios.post('/receive', config);

		for (let result of searchResults.data) {
			const card = document.createElement('div');
			card.innerHTML = `<div class="card mt-4 mb-3 shadow"
	style="max-width: 540px; max-height: 540px;">
	<div class="row g-0 ms-100">
		<div class="col-md-4">
			<img src=${bloodgrp(result.bGroup)}
				alt="..."
				class="img-fluid">
		</div>
		<div class="col-md-8 mt-2">
			<div class="card-body">
				<h5 class="card-title"> Donar: ${result.fName}</h5>
				<h5 class="card-title">${result.bGroup}</h5>
				<h5 class="card-title">${result.age}</h5>
				<form method="POST" action="/details">
					<input type="text" name="_id" value="${result._id}" style="display: none;">
					<input type="submit" class="btn btn-danger" value="Details">
				</form>
			</div>
		</div>
	</div>
</div>`;
			section.style.height = "auto";
			div.append(card);
		}

	} else {
		alert("Please select blood group");
	}
})

function remove() {
	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}

history.addEventListener('click', async function (e) {
	e.preventDefault();
	remove();
	const searchResults = await axios.get('/history', { hist: true });

	for (let result of searchResults.data) {
		const card = document.createElement('div');
		card.innerHTML = `<div class="card mt-4 mb-3 shadow"
	style="max-width: 540px; max-height: 540px;">
	<div class="row g-0 ms-100">
		<div class="col-md-4">
			<img src=${bloodgrp(result.bGroup)}
				alt="..."
				class="img-fluid">
		</div>
		<div class="col-md-8 mt-2">
			<div class="card-body">
				<h5 class="card-title">Receiver: ${result.fName}</h5>
				<h5 class="card-title">${result.bGroup}</h5>
				<h5 class="card-title">${result.age}</h5>
				<form method="POST" action="/histDetails">
					<input type="text" name="_id" value="${result._id}" style="display: none;">
					<input type="submit" class="btn btn-danger" value="Details">
				</form>
			</div>
		</div>
	</div>
</div>`;
		section.style.height = "auto";
		div.append(card);
	}
})