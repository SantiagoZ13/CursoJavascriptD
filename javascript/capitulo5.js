// cofla tuvo 90 clases

let dias = 90;
let asistenciasMinimas = (90 * dias) /100;

// En la universidad pidieron 20 trabajos practicos

let trabajosPracticosTotales = 20;
let trabajosMinimos = (75 * trabajosPracticosTotales) / 100;

let promedio = false;
let asistencias = false;
let trabajosPracticos = false;

alert(`Bienvenido a la plataforma de calificacion
Para pasar debes cumplir tres requisitos:\n
1. Tener un 90% de asistencias
2. Tener un promedio de 7 o superior
3. Haber Entregado el 75% de los trabajos practicos
`)

let respuestaPromedio = parseInt(prompt("Digite la nota de su promedio total: "));
let respuestaDias = parseInt(prompt("Digite el numero de dias que asistio a la Universidad: "));
let respuestaTrabajos = parseInt(prompt("Digite el numero de trabajos practicos entregados: "));



const aprueba = (promedio, asistencias, trabajosPracticos)=>{
    if(promedio && asistencias && trabajosPracticos){
        console.log("%cFelicidades pasaste el semestre", "color:green; font-size: 20px;");
    }else{
        console.log("%cLo siento, no pasaste el semestre", "color:red; font-size:20px");
    }
}

const revisionEstudiantes = (notasPromedio, dias, trabajos) =>{
    console.group("Revision Estudiante");
    console.group("Promedio");
    if(notasPromedio >= 7){
        promedio = true; 
        console.log("%cSu promedio cumple con el requisito", "color: green;font-size: 13px");
    }else{
        console.log("%cSu promedio no cumple con el requisito", "color: green;font-size: 13px");
        console.log(`Debia tener un promedio de 7 o mas`);
    }
    console.groupEnd();
    console.group("Asistencias");
    if (dias >= asistenciasMinimas){
        asistencias = true;
        console.log("%cSus asistencian cumplen el requisito", "color: green;font-size: 13px");
    }else{
        console.log("%cSus asistencian no cumplen el requisito", "color: green;font-size: 13px");
        console.log(`Debia tener una cantidad de ${asistenciasMinimas} asistencias como minimo`);
    }
    console.groupEnd();
    console.group("Trabajos Practicos");
    if(trabajos >= trabajosMinimos){
        trabajosPracticos = true;
        console.log("%cEl porcentaje de sus trabajos practicos cumplen el requisito", "color: green;font-size: 13px");
    }else{
        console.log("%cEl porcentaje de sus trabajos practicos no cumplen el requisito", "color: red;font-size: 13px");
        console.log(`Debia tener una cantidad de ${trabajosMinimos} trabajos como minimo`);
    }
    console.groupEnd();
    console.groupEnd();
    aprueba(promedio, asistencias, trabajosPracticos);
}

revisionEstudiantes(respuestaPromedio, respuestaDias, respuestaTrabajos);