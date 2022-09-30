// Variables globales
let nameUser = document.getElementById("nameUser");
let age = document.getElementById("age");
let indexForm = document.getElementById("indexForm");

const agregarRegistro = () => {
  // Leo lo que hay en memoria
  if (validation()) {
    let listAlum = JSON.parse(localStorage.getItem("listAlumn"));
    if (indexForm.value === ''){
        if (listAlum === null) {
        listAlum = [];
        }
        const newUser = {
        name: nameUser.value,
        age: age.value,
        };
        listAlum.push(newUser);
        localStorage.setItem("listAlumn", JSON.stringify(listAlum));
    } else {
        console.log('Editar');
        listAlum[indexForm.value].name = nameUser.value;
        listAlum[indexForm.value].age = age.value;
        document.getElementById('btnAction').innerText='Agregar'
        localStorage.setItem("listAlumn", JSON.stringify(listAlum));
    }
    clearForm();
    showTable();
  }
};

const showTable = () => {
  let listAlum = JSON.parse(localStorage.getItem("listAlumn"));
  if (listAlum === null) {
    listAlum = [];
  }
  document.getElementById("tbodyTablet").innerHTML = "";
  let row = "";
  listAlum.forEach((element, index) => {
    row += `<tr>
                    <td>${index + 1}</td>
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    <td>
                    <button class="btn btn-primary" onClick="search(${index})">Editar</button>
                    <button class="btn btn-danger" onClick="deleteItem(${index})">Eliminar</button></td>
                </tr>
            `;
  });
  document.getElementById("tbodyTablet").innerHTML = row;
};

const clearForm = () => {
  nameUser.value = "";
  age.value = "";
  indexForm.value = "";
};

const validation = () => {
  if (nameUser.value === "") {
    alert("Debe digitar el nombre");
    return false;
  }
  if (age.value === "") {
    alert("Debe digitar el edad");
    return false;
  }
  return true;
};

const search = (index) =>{
    let listAlum = JSON.parse(localStorage.getItem("listAlumn"));
    nameUser.value = listAlum[index].name;
    age.value = listAlum[index].age;
    indexForm.value = index;
    document.getElementById('btnAction').innerText='Editar'
}

const deleteItem = (index) =>{
    console.log(index);

}

showTable();
