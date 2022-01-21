//DOM Data Object Model

let ejecutar = document.getElementById("btn_ejecutar");
let nombre = document.getElementById("txt_nombre");
let apellido = document.getElementById("txt_apellido");
let nombreUsuario = document.getElementById("nombreUsuario");





/**
 * normal: nombreUsuario.innerHTML = nombreUsuario.innerHTML+nombre
 * Abreviado = nombreUsuario.innerHTML += nombre
 */

const cambiarNombre = () => {
  let nombre = prompt("ingrese su nombre");
  nombreUsuario.innerHTML = "Bienvenido/a " + nombre;
  localStorage.setItem("nombre",nombre);
};

if(localStorage.getItem("nombre")){
    nombreUsuario.innerHTML = "Bienvenido" + localStorage.getItem("nombre");
}

//Eventos se recomienda que vayan al final.
ejecutar.addEventListener("click", cambiarNombre);

/**
 *  variable.onClick = () => {
 *      funcion
 *  };
 */
