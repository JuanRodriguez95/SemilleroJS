/**
 * HTML -> Textos: nombre, edad, direccion, telefono, documento
 * Boton que diga ingresar datos
 * promt que piden la informacion.
 * cada aceptar insertar en el html
 */

let ingresar = document.getElementById("btn_ingresar");
let txtNombre = document.getElementById("txt_nombre");
let txtEdad = document.getElementById("txt_edad");
let txtDireccion = document.getElementById("txt_direccion");
let txtTelefono = document.getElementById("txt_telefono");
let txtDocumento = document.getElementById("txt_documento");

const tusDatos = () => {
    alert('Hola, aqui voy a imprimir tus datos');
    let nombre = prompt('Primero dime como te llamas? ');
    txtNombre.innerHTML = "Nombre : "+nombre;
    localStorage.setItem("nombre",nombre);
    alert("Actualizado");
    let edad = prompt('Vamos con tu edad, cuantos años tienes?');
    txtEdad.innerHTML = "Edad : "+edad;
    localStorage.setItem("edad",edad);
    let direccion = prompt(' ahora la direccion de tu residencia actual');
    txtDireccion.innerHTML = "Direccion : "+direccion;
    localStorage.setItem("direccion",direccion);
    let telefono = prompt(' por ultimo, ingresa tu numero de telefono ');
    txtTelefono.innerHTML = "Telefono : "+telefono;
    localStorage.setItem("telefono",telefono);
    let documento = prompt(' ingresa tu documento de identidad ');
    txtDocumento.innerHTML ="Documento : "+documento;
    localStorage.setItem("documento",documento);
    let datos = [nombre,edad,direccion,telefono,documento];
    localStorage.setItem("datos",datos);
}

//.split(",") -> dividir un string segun el caracter para convertirlo en un array

if(localStorage.getItem("datos")){
    let arrayDatos = localStorage.getItem("datos").split(",");
    txtNombre.innerHTML = "Nombre : "+arrayDatos[0];
    txtEdad.innerHTML = "Edad : "+arrayDatos[1];
    txtDireccion.innerHTML = "Direccion : "+arrayDatos[2];
    txtTelefono.innerHTML = "Telefono : "+arrayDatos[3];
    txtDocumento.innerHTML ="Documento : "+arrayDatos[4];
}



ingresar.addEventListener("click",tusDatos);
