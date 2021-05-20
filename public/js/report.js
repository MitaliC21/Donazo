const button = document.querySelector('#button');
const tbody = document.querySelector('tbody');


button.addEventListener('click', async function (e) {
    e.preventDefault();
    remove();
    const searchTerm = searchid.value;
    if (searchTerm != "") {
        const config = { q: searchTerm };
        const searchResults = await axios.post('/receive', config);

        for (let result of searchResults.data) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<th scope="row">1</th>
            <td>${result.fName}</td>
            <td>${result.email}</td>
            <td>${result.bGroup}</td>
            <td>${result.age}</td>
            <td>${result.state}</td>
            <td>${result.age}</td>`;
            section.style.height = "auto";
            tbody.append(tr);
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
