var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Id"] = document.getElementById("Id").value;
    formData["Name"] = document.getElementById("Name").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Qualification"] = document.getElementById("Qualification").value;
    formData["Year"] = document.getElementById("Year").value;
    formData["City"] = document.getElementById("City").value;
    formData["Country"] = document.getElementById("Country").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Qualification;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Year;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.City;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Qualification;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Id").value=''
    document.getElementById("Name").value=''
    document.getElementById("Email").value=''
    document.getElementById("Qualification").value=''
    document.getElementById("Year").value=''
    document.getElementById("City").value=''
    document.getElementById("Country").value=''
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Id").value=selectedRow.cells[0].innerHTML;
    document.getElementById("Name").value=selectedRow.cells[1].innerHTML;
    document.getElementById("Email").value=selectedRow.cells[2].innerHTML;
    document.getElementById("Qualification").value=selectedRow.cells[3].innerHTML;
    document.getElementById("Year").value=selectedRow.cells[4].innerHTML;
    document.getElementById("City").value=selectedRow.cells[5].innerHTML;
    document.getElementById("Country").value=selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Id;
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.Email;
    selectedRow.cells[3].innerHTML = formData.Qualification;
    selectedRow.cells[4].innerHTML = formData.Year;
    selectedRow.cells[5].innerHTML = formData.City;
    selectedRow.cells[6].innerHTML = formData.Country;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NameValidationError").classList.contains("hide"))
            document.getElementById("NameValidationError").classList.add("hide");
    }
    return isValid;
}