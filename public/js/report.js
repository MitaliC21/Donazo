const button = document.querySelector('#button');
const tbody = document.querySelector('tbody');
const searchid = document.querySelector('#select');

button.addEventListener('click', async function (e) {
    console.log("clicked!!")
    e.preventDefault();
    remove();
    const searchTerm = searchid.value;
    if (searchTerm != "") {
        const config = { q: searchTerm };
        const searchResults = await axios.post('/report', config);
        if (searchTerm === 'i') {
            for (let result of searchResults.data) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<th scope="row">${result._id}</th>
                <td>${result.fName}</td>
                <td>-</td>
                <td>${result.bGroup}</td>
                <td>${result.age}</td>
                <td>-</td>
                <td>-</td>`;
                tbody.append(tr);
            }

        }
        else {
            for (let result of searchResults.data) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<th scope="row">${result._id}</th>
            <td>${result.fName}</td>
            <td>${result.email}</td>
            <td>${result.bGroup}</td>
            <td>${result.age}</td>
            <td>${result.state}</td>
            <td>${result.city}</td>`;
                tbody.append(tr);
            }
        }

    } else {
        alert("Please select blood group");
    }
})

function remove() {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
