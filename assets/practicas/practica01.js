/**
 * 1. por medio de un boton pedir al usuario el nombre 
 * 2. despues de solicitar el nombre, aparece mas promt
 *      edad
 *      direccion
 *      documento
 *      telefono
 * 3. alert concatenado el mensaje : " Hola [nombre] + apellido, 
 *      tu edad es :[edad] , tu direccion es [direccion] "
 */


const tusDatos = () => {
    alert('Hola, aqui voy a imprimir tus datos');
    let nombre = prompt('Primero dime como te llamas? ');
    let apellido = prompt('Ahora dime, cual es tu apelido? ');
    let edad = prompt('Vamos con tu edad, cuantos años tienes?');
    let direccion = prompt(' ahora la direccion de tu residencia actual');
    let documento = prompt(' ingresa tu documento de identidad ');
    let telefono = prompt(' por ultimo, ingresa tu numero de telefono ');
    alert(`Listo muchas gracias, estos son tus datos: \n tu nombre es ${nombre} ${apellido} \n identificado con el documento ${documento} \n tienes ${edad} años \n tu direccion actual es ${direccion} \n tu telefono es ${telefono}`);
    

    

}