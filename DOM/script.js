let lista = document.getElementsByTagName('h1')
lista[0].innerText = '<h3>Hola Antonio</h3>'

listaContenido = [];
for(ciclo=0; ciclo<= 2; ciclo++){
    listaContenido.push(lista[ciclo].innerHTML);
}


let contTBody = document.getElementById('tbody');
let row = '';
listaContenido.forEach((element, index) => {
    row += `
    <tr> 
        <td> ${index+1} </td>
        <td> ${element }</td>
    </tr>`;    
});
contTBody.innerHTML = row;


list2 = ['uno', 'Dos', 'Tres', 'cuatro', 'cinco']
let contTBodyTwo = document.getElementById('tbody2');
let rowTwo = '';
list2.forEach((element, index) => {
    rowTwo += `
    <tr> 
        <td> ${index+1} </td>
        <td> ${element }</td>
    </tr>`;    
});
contTBodyTwo.innerHTML = rowTwo;

list3 = [
    { nombre: 'Juan', edad: 5},  //0
    { nombre: 'Pedro', edad: 10}, //1
    { nombre: 'Juan', edad: 60},  //2
]


const editar = (index) => {
    const nombreAct = prompt("Digite el nombre a actualizar");
    const edadAct = prompt("Digite la edad a actualizar");
    list3[index].nombre = nombreAct;
    list3[index].edad = edadAct;
    mostrarLista();
} 

const mostrarLista = () =>{
    let contTBodyThree = document.getElementById('tbody3');
    let rowThree = '';
    list3.forEach((element, index) => {
        rowThree += `
        <tr> 
            <td> ${index+1} </td>
            <td> ${element.nombre}</td>
            <td> ${element.edad} </td>
            <td> <button onClick="editar(${index})">Editar</button> </td>
        </tr>`;    
    });
    contTBodyThree.innerHTML = rowThree;
}

mostrarLista();