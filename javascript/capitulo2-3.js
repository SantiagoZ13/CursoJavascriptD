const sumar = (num1, num2) => {
    let resultado = num1 + num2;
    return resultado;
};

const restar = (num1, num2) => {
    let resultado = num1 - num2;
    return resultado;
};

const multiplicar = (num1, num2) => {
    let resultado = num1 * num2;
    return resultado;
};

const dividir = (num1, num2) => {
    let resultado = num1 / num2;
    return resultado;
};

const potenciar = (base, exponente) => {
    let resultado = Math.pow(base, exponente);
    return resultado;
};

const raizCuadrada = (numero) => {
    let resultado = Math.sqrt(numero);
    return resultado;
};

const raizCubica = (numero) => {
    let resultado = Math.cbrt(numero);
    return resultado;
};

const calculadora = () =>{
    let operacion = parseInt(
        prompt(`1: suma,   2: resta,   3: multiplicacion,   4: division 
        \n5: Potencia,   6: RaizCuadrada,   7: RaizCubica `
        )
    );
    if (operacion == 1) {
        let num1 = parseInt(prompt("Digite el primer numero a sumar"));
        let num2 = parseInt(prompt("Digite el segundo numero a sumar"));
        document.write(sumar(num1, num2));
    } else if (operacion == 2) {
        let num1 = parseInt(prompt("Digite el primer numero a restar"));
        let num2 = parseInt(prompt("Digite el segundo numero a restar"));
        document.write(restar(num1, num2));
    } else if (operacion == 3) {
        let num1 = parseInt(prompt("Digite el primer numero a multiplicar"));
        let num2 = parseInt(prompt("Digite el segundo numero a multiplicar"));
        document.write(multiplicar(num1, num2));
    } else if (operacion == 4) {
        let num1 = parseInt(prompt("Digite el primer numero a dividir"));
        let num2 = parseInt(prompt("Digite el segundo numero a dividir"));
        document.write(dividir(num1, num2));
    } else if (operacion == 5) {
        let base = parseInt(prompt("Digite la base"));
        let exponente = parseInt(prompt("Digite el exponente"));
        document.write(potenciar(base, exponente));
    } else if (operacion == 6) {
        let num1 = parseInt(prompt("Digite el numero a sacar raiz cuadrada"));
        document.write(raizCuadrada(num1));
    } else if (operacion == 7) {
        let num1 = parseInt(prompt("Digite el numero a sacar raiz cubica"));
        document.write(raizCubica(num1));
    } else {
        let seguir = prompt("Selecciona una opcion correcta\nQuieres abrir la calculadores si/no")
        if(seguir == "si"){
            calculadora()
        }else{
            document.write("Calculadora desactivada");
        }
    }
}

calculadora();

