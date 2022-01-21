
function BizzBuzz() {
    let a = prompt("ingrese el primer numero");
    let b = prompt("ingrese el segundo numero");
    let resultado = [];
    for (let i = 1; i < 100; i++) {
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
    }
    for (let i = 0; i < resultado.length; i++) {
        document.write(resultado[i]+'<br>');
    }
}