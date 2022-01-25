//Ejercicio Fechas


let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth()+1;
let dia = fecha.getDate(); // trae el dia en el calendario - getDay() trae el dia de la semana.

let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log(`${hora}:${minutos}:${segundos} - ${dia}/${mes}/${anio}`);



