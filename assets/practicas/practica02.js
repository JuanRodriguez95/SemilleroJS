
//Menus , Datos y mensajes
let mensajeUno = `Buenos dias, seleccione un departamento (Ingresar el numero que identifica su elección): \n 
1. Cundinamarca \n 
2. Antioquia \n 
3. Meta \n 
4. Boyaca \n
5. Santander`;

let mensajeCundinamarca = `Seleccione una de las ciudades del departamento que elijio : \n 
1. Bogota \n 
2. Facatativa \n 
3. Madrid \n 
4. Funza \n
5. Subachoque`;

let datosCundinamarca = [
  "Bogota-Elevacion: 2.640m",
  "Facatativa-Poblacion: 141.762",
  "Madrid-Superficie: 121 Km2",
  "Funza-Elevacion: 2548m",
  "Subachoque-Poblacion:16.117",
];


let mensajeAntioquia = `Seleccione una de las ciudades del departamento que elijio : \n 
1. Medellin \n 
2. Bello \n 
3. Itagui \n 
4. Envigado \n
5. Apartado`;

let datosAntioquia = [
  "Medellin-Poblacion: 2.501.470",
  "Bello-Poblacion: 476.716",
  "Itagui-Poblacion: 253.865",
  "Envigado-Poblacion: 230.635",
  "Apartado-Poblacion: 169.319",
];


let mensajeMeta = `Seleccione una de las ciudades del departamento que elijio : \n 
1. Puerto Gaitan \n 
2. La Macarena \n 
3. La Uribe \n 
4. Barranca de Upia \n
5. San Martin`;


let datosMeta = [
  "PuertoGaitan-Poblacion: 41,017",
  "La Macarena-Poblacion: 32,861",
  "La Uribe-Poblacion: 8,549",
  "BarrancadeUpia-Poblacion: 3,926 ",
  "San Martin-Poblacion: 22,281",
];

let mensajeBoyaca = `Seleccione una de las ciudades del departamento que elijio : \n 
1. Tunja \n 
2. Sogamoso \n 
3. Duitama \n 
4. Chiquinquira \n
5. Paipa`;

let datosBoyaca = [
  "Tunja-Poblacion: 1.217.000",
  "Sogamoso-Poblacion: 200,021",
  "Duitama-poblacion: 126,670",
  "Chiquinquira-Poblacion: 72,274 ",
  "Paipa-Poblacion: 30,740",
];


let mensajeSantander = `Seleccione una de las ciudades del departamento que elijio : \n 
1. Bucaramanga \n 
2. Floridablanca \n 
3. Barrancabermeja \n 
4. Giron \n
5. Piedecuesta`;

let datosSantander = [
  "Bucarmanga-Poblacion: 599.106",
  "FloridaBlanca-Poblacion: 316.200",
  "Barrancabermeja-Poblacion: 210.729",
  "Giron-Poblacion: 173.841 ",
  "PiedeCuesta-Poblacion: 186.167",
];

/**
 * Funcion que muestra el menu de opciones de los departamentos.
 */
function inicio() {
    
  let eleccionUno = prompt(mensajeUno);
  let departamento;
  switch (eleccionUno) {
    case "1":
      departamento = prompt(mensajeCundinamarca);
      ciudades(departamento, datosCundinamarca);
      break;
    case "2":
      departamento = prompt(mensajeAntioquia);
      ciudades(departamento, datosAntioquia);
      break;
    case "3":
      departamento = prompt(mensajeMeta);
      ciudades(departamento, datosMeta);
      break;
    case "4":
      departamento = prompt(mensajeBoyaca);
      ciudades(departamento, datosBoyaca);
      break;
    case "5":
      departamento = prompt(mensajeSantander);
      ciudades(departamento, datosSantander);
      break;
    default:
      alert("la opcion ingresada no es valida");
      break;
  }
}

/**
 * Funcion ciudades que recibe la opcion del usuario y el array con los datos de las ciudades.
 * y los muestra en un alert.
 * @param {*} eleccion opcion del switch
 * @param {*} datos array con los datos de as ciudades del departamento seleccionado
 */
function ciudades(eleccion, datos) {
  switch (eleccion) {
    case "1":
      alert(datos[0]);
      break;
    case "2":
     alert(datos[1]);
      break;
    case "3":
     alert(datos[2]);
      break;
    case "4":
     alert(datos[3]);
      break;
    case "5":
      alert(datos[4]);
      break;
    default:
      alert("la opcion ingresada no es valida");
      break;
  }
}
