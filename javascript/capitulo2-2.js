let estudiantes = [];

const pruebaAusencia = (nombre, ausencia, diasParaPasar) => {
    if(ausencia <= diasParaPasar){
        document.write(`${nombre} pasaste`)
    }else{
        document.write(`${nombre} no pasaste por tener ${ausencia} ausencias`);
    }
}

const revisionEstudiantes = (numeroDias, cantidadEstudiantes)=>{
    for(let i = 1; i<=cantidadEstudiantes; i++){
        let nombreEstudiante = prompt(`Escribe el nombre del estudiante ${i}`);
        estudiantes.push(nombreEstudiante);
    }
    for(let estudiante of estudiantes){
        let i = 1;
        let ausencia = 0;
        let porcentaje = (numeroDias * 10)/100;
        while(i<=numeroDias){
            let estado = prompt(`estudiante ${estudiante} esta presente en el dia ${i}`)
            if(estado == "A"){
                ausencia++;
            }else if(estado == "P"){
                ausencia;
            }
            i++
        }
        pruebaAusencia(estudiante, ausencia, porcentaje);
        document.write(`<br/>`)
    }
}