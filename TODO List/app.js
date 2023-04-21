var arr = [];

function submit() {
    let title = document.querySelector('.title').value;
    let desc = document.querySelector('.description').value;
    if (localStorage.getItem('itemsJSON') == null) {
        arr.push([title, desc]);
        localStorage.setItem('itemsJSON', JSON.stringify(arr));
    }
    else {
        itemsStr = localStorage.getItem('itemsJSON');
        arr = JSON.parse(itemsStr);
        arr.push([title, desc]);
        localStorage.setItem('itemsJSON', JSON.stringify(arr));
    }
    update();
}

function clearStore() {
    localStorage.clear();
    arr = [];
    update();
}

function update() {
    let tableBody = document.getElementById('tableBody');
    let str = "";
    if (localStorage.getItem('itemsJSON') !== null) {
        let itemsStr = localStorage.getItem('itemsJSON');
        arr = JSON.parse(itemsStr);

        // Populating the table
        arr.forEach((element, index) => {
            str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button type="button" class="btn btn-outline-danger" onclick="deleteMe(${index})">Delete</button></td>
            </tr>`
        })
    }
    tableBody.innerHTML = str;
}

add = document.querySelector('.add');
add.addEventListener('click', submit);


clearAll = document.querySelector('.clearAll');
clearAll.addEventListener('click', function () {
    if(localStorage.getItem('itemsJSON') == null){
        alert ("The list is already empty");
    }
    else if (confirm('Do you really want to clear the list?')) {
        clearStore();
    }
});

function deleteMe(index) {
    arr.splice(index, 1);
    localStorage.setItem('itemsJSON', JSON.stringify(arr));
    update();
}

window.onload = update();