let mostrarAlumnos = () => {
    let alumnosLS = JSON.parse(localStorage.getItem('alumnosls'))
    if( alumnosLS === null){
        console.log('entro');
        localStorage.setItem('alumnosls',  JSON.stringify([]));
        alumnosLS = []
    }
    document.getElementsByTagName("tbody")[0].innerHTML = '';
    alumnosLS.forEach((element, index) => {
        let texth1 = document.createElement("tr");
        texth1.innerHTML = `
        <td scope="row">${index + 1}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>
            <button type="button" class="btn btn-primary" onclick="rellenarFormulario(${index})">
                Editar
            </button>
            <button type="button" class="btn btn-danger" onclick="eliminarRegistro(${index})">
                Eliminar
            </button>
        </td>`;
        document.getElementsByTagName("tbody")[0].appendChild(texth1);
    });
}

let eliminarRegistro = (parIndex) => {
    alumnosAlmacenados = JSON.parse(localStorage.getItem('alumnosls'))
    alumnosAlmacenados = alumnosAlmacenados.filter((alumno, index) => index !== parIndex);
    localStorage.setItem('alumnosls',  JSON.stringify(alumnosAlmacenados));
    mostrarAlumnos();
}

let rellenarFormulario = (parIndex) => {
    alumnosAlmacenados = JSON.parse(localStorage.getItem('alumnosls'))
    document.getElementById('position').value = parIndex;
    document.getElementById('nameUser').value = alumnosAlmacenados[parIndex].name;
    document.getElementById('age').value = alumnosAlmacenados[parIndex].age;
}

let actualizarRegistro = () => {
    let position = document.getElementById('position').value;
    let nameUser = document.getElementById('nameUser').value;
    let age = document.getElementById('age').value;
    if (position == '' || isNaN(position)) {
        alert('Debe seleccionar un registro');
        return false;
    }
    alumnosAlmacenados = JSON.parse(localStorage.getItem('alumnosls'))
    alumnosAlmacenados[position] = {
        name: nameUser,
        age: age
    }
    document.getElementById('position').value = '';
    document.getElementById('nameUser').value = '';
    document.getElementById('age').value = '';
    localStorage.setItem('alumnosls',  JSON.stringify(alumnosAlmacenados));
    mostrarAlumnos();
}

let agregarRegistro = () => {
    alumnosLS = JSON.parse(localStorage.getItem('alumnosls'))
    const nuevoAlumno = {
        name: document.getElementById('nameUser').value,
        age: document.getElementById('age').value
    }
    document.getElementById('nameUser').value = '';
    document.getElementById('age').value = '';
    alumnosLS.push(nuevoAlumno);
    localStorage.setItem('alumnosls',  JSON.stringify(alumnosLS));
    mostrarAlumnos();
}

let clearCache = () => {
    localStorage.clear();    
    alert('Se limpio la memoria de localstorage');
    mostrarAlumnos();
}

mostrarAlumnos();
