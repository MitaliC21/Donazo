const id = document.querySelector('p').innerText;
const config = { _id: id };
const div = document.querySelector('#card')
async function loadDonarDetails() {
    await axios.post('/show', config).then((result) => {
        const card = document.createElement('div');
        card.innerHTML = `<div class="card mt-4 mb-3 shadow"
	style="max-width: 540px; max-height: 540px;">
	<div class="row g-0 ms-100">
		<div class="col-md-4">
			<img src=${bloodgrp(result.data[0].bGroup)}
				alt="..."
				class="img-fluid">
		</div>
		<div class="col-md-8 mt-2">
			<div class="card-body">
            <h1 class="card-title">Donar Details</h1>
				<h5 class="card-title">Name: ${result.data[0].fName}</h5>
				<h5 class="card-title">Blood group: ${result.data[0].bGroup}</h5>
				<h5 class="card-title">Age: ${result.data[0].age}</h5>
                <h5 class="card-title">e-mail: ${result.data[0].email}</h5>
                <h5 class="card-title">State: ${result.data[0].state}</h5>
                <h5 class="card-title">City: ${result.data[0].city}</h5>
			</div>
		</div>
	</div>
</div>`;
        div.appendChild(card);
    })

}
loadDonarDetails();

async function loadReceiverDetails() {
    await axios.post('/history', config).then((result) => {
        const card = document.createElement('div');
        card.innerHTML = `<div class="card mt-4 mb-3 shadow"
	style="max-width: 540px; max-height: 540px;">
	<div class="row g-0 ms-100">
		<div class="col-md-4">
			<img src=${bloodgrp(result.data[0].bGroup)}
				alt="..."
				class="img-fluid">
		</div>
		<div class="col-md-8 mt-2">
			<div class="card-body">
            <h1 class="card-title">Receiver Details</h1>
				<h5 class="card-title">Name: ${result.data[0].fName}</h5>
				<h5 class="card-title">Blood group: ${result.data[0].bGroup}</h5>
				<h5 class="card-title">Age: ${result.data[0].age}</h5>
                <h5 class="card-title">e-mail: ${result.data[0].email}</h5>
                <h5 class="card-title">State: ${result.data[0].state}</h5>
                <h5 class="card-title">City: ${result.data[0].city}</h5>
			</div>
		</div>
	</div>
</div>`;
        div.appendChild(card);
    })
}
loadReceiverDetails();
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