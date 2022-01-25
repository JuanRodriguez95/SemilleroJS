let ejecutar = document.getElementById("btn_ejecutar");
let agregar = document.getElementById("btn_agregar");
let tabla = document.getElementById("lista");

let ciudades = [];

function agregarCiudad(){
    if(ciudades.length<=6){
        let ciudad = prompt("Ingrese la ciudad");
        ciudades.push(ciudad);
    }else{
        console.log('Lista llena');
    }
}

function mostrarArray(){
    console.log(ciudades);
    tabla.innerHTML = '<tr></tr>'
    for (let i = 0; i < ciudades.length; i++) {
        const elemento = document.createElement('tr');
        elemento.innerHTML = `<td>${ciudades[i]}</td>`;
        tabla.appendChild(elemento);
    }
}

ejecutar.onclick = () =>{
    mostrarArray();
}

agregar.onclick = () =>{
    agregarCiudad();
}

