let ejFor = document.getElementById("btn_ejecutar");

resultado = [];

function bizzBuzzWhile(a,b){

    let i=1;
    while(i<=100){
        if(((i%a)==0)&&((i%b)==0)){
            resultado.push(i+' BizzBuzz \n')
        }else{
            if((i%a)==0){
                resultado.push(i+' Buzz \n');
            }else{
                if((i%b)==0){
                    resultado.push(i+' Bizz \n');
                }
            }
        }
        resultado.push(i+'\n');
        i++;
    }
}


ejFor.onclick = () =>{
    let a = prompt("ingrese el primer numero");
    let b = prompt("ingrese el segundo numero");
    bizzBuzzWhile(a,b);
    console.log(resultado);
}