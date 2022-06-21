//Parte uno 
//(mi solucion):
let primero = [];
const acceso = (nombre)=>{
    let edad = parseInt(prompt(`Digite su edad ${nombre}`));
    if(edad >= 18 && edad < 100){
        document.write(`${nombre} puede pasar <br/>`);
        let hora = parseInt(prompt("Digite la hora actual"));
        if (hora >= 2){
            primero.push(nombre);
            if (primero[0] == nombre){
                document.write("Puedes pasar gratis <br/><br/>");
            }else{
                document.write("la entrado cuesta 5$ <br/><br/>")
            }
        }else{
            document.write("la entrado cuesta 5$ <br/><br/>")
        }
    }else{
        document.write(`${nombre} no puedes pasar porque eres menor de edad <br/>`);
    }
}

//solucion Dalto:
let boletoGratis = false;
const validarAcceso = (hora)=>{
    if (edad >= 18 && edad < 100){
        if(hora >= 2 && boletoGratis == false){
            document.write("Puedes pasar gratis por ser el primero");
        }else{
            document.write("Puedes pasar pero la entrada vale 5$");
        }
    }else{
        document.write("No podes pasar");
    }
}
