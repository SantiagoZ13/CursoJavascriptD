const sumar = (num1, num2)=>{
    let resultado = num1 + num2;
    return resultado;
}

const restar = (num1, num2)=>{
    let resultado = num1 - num2;
    return resultado;
}

const multiplicar = (num1, num2)=>{
    let resultado = num1 * num2;
    return resultado;
}

const dividir = (num1, num2) =>{
    let resultado = num1 / num2;
    return resultado;
}


alert("¿Que operacion deseas realizar?");
let operacion = parseInt(prompt("1: suma,   2: resta,   3: multiplicacion,   4: division"));
if(operacion == 1){
    num1 = prompt("Digite el primer numero a sumar");
    num2 = prompt("Digite el segundo numero a sumar");
    document.write(sumar(num1, num2));
}else if(operacion == 2){
    num1 = prompt("Digite el primer numero a restar");
    num2 = prompt("Digite el segundo numero a restar");
    document.write(restar(num1, num2));
}else if(operacion == 3){
    num1 = prompt("Digite el primer numero a multiplicar");
    num2 = prompt("Digite el segundo numero a multiplicar");
    document.write(multiplicar(num1, num2));
}else if(operacion == 4){
    num1 = prompt("Digite el primer numero a dividir");
    num2 = prompt("Digite el segundo numero a dividir");
    document.write(dividir(num1, num2));
}