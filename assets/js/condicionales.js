// Condicionales 
//let edad = prompt("ingresa tu edad");

/*
if (edad >= 18) {
    alert("ya es legal que beba alcohol");
}else{
    alert("aun no puede beber alcohol");
}
*/

// switch (edad) {
//     case "15":
//         alert("No puede le falta 3 años");
//         break;
//     case "16":
//         alert("No puede le fantan 2 años");
//         break;
//     case "17":
//         alert("No puede le fantan 1 año");
//         break;
//     case "18":
//         alert("Ya es mayor de edad");
//         break;
//     default:
//         alert("Lo que sea");
//         break;
// }

let dia = prompt("ingrese in dia a la semana").toLowerCase();

if(dia=="lunes" || dia=="martes" || dia=="miercoles" || dia=="jueves" || dia=="viernes"){
    alert("entre semana")
}else{
    if(dia=="sabado" || dia=="domingo"){
        alert("Fin de semana");
    }else{
        alert("Ingrese solo dias de la semana");
    }
}
