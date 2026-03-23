let Cars = [];
let Updateindex = -1;

// ADD
function Add() {
    let image=document.getElementById("txtImage").value;
    let brand=document.getElementById("txtBrand").value;
    let price=parseFloat(document.getElementById("txtPrice").value);
    let name=document.getElementById("txtName").value;

    if (Updateindex === -1) {
        let Car = { image, brand, price, name };
        Cars.push(Car);
    } else {
        Cars[Updateindex] = { image, brand, price, name };
        Updateindex = -1;
    }

    ShowData();

    // FIX modal close
    let Modal = bootstrap.Modal.getInstance(document.getElementById('CarsModal'));
    Modal.hide();
}

// SHOW
function ShowData() {
    let row = "";
    for (let i = 0; i < Cars.length; i++) {
        row += `
        <div class="card col-3">
            <img src="${Cars[i].image}" alt="">
            <p class="fw-bold fs-5">${Cars[i].name}</p>
            <p class="fw-bolder fs-4 text-danger">$ ${Cars[i].price}</p>
            <button onclick="Update(${i})" class="btn btn-primary">Update</button>
            <button onclick="Delete(${i})" class="btn btn-danger mt-2">Delete</button>
            <br>
        </div>
        `;
    }
    document.getElementById("Datas").innerHTML = row;
}

// DELETE
function Delete(index) {
    Cars.splice(index, 1);
    ShowData();
}

// UPDATE
function Update(index) {
    Updateindex=index;

    document.getElementById("txtImage").value = Cars[index].image;
    document.getElementById("txtBrand").value = Cars[index].brand;
    document.getElementById("txtPrice").value = Cars[index].price;
    document.getElementById("txtName").value = Cars[index].name;

    let Modal = new bootstrap.Modal(document.getElementById('CarsModal'));
    Modal.show();
}