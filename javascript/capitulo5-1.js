alert(`|       Aplicacion de calendario       |\n
1. Debes Digitar la cantidad de dias que deseas organizar en el calendario\n
2. Escribe en cuantas horas debes realizar las tareas que el programa te pregunte en los dias que elegiste.
`)

let chosenDays = parseInt(prompt(`Dias para organizar tu calendario 
(maximo 31 dias)`)
); 

let workHours =  parseInt(prompt("Horas deseadas para Trabajos de casa"));
let studyHours = parseInt(prompt("Horas deseadas para Estudio"));
let practicalWorkHours = parseInt(prompt("Horas deseadas para Trabajos de la Universidad"));
let WorkingHours = parseInt(prompt("Horas deseadas para Trabajo"));



let dailyHomeworkMinutes = Math.round((workHours / chosenDays) * 60);
let dailyStudyMinutes = Math.round((studyHours / chosenDays) * 60);
let minutesToDoPracticalWorkDaily = Math.round((practicalWorkHours / chosenDays) * 60);
let dailyWorkingMinutes = Math.round((WorkingHours / chosenDays) * 60);


for(let i = 1; i <= chosenDays; i++){
    if(i == 1){
        console.group("SEMANA 1");
    }
    if(i == 8){
        console.groupEnd();
        console.group("SEMANA 2")
    }else if(i == 15){
        console.groupEnd();
        console.group("SEMANA 3")
    }else if(i == 22){
        console.groupEnd();
        console.group("SEMANA 4")
    }else if(i == 29){
        console.groupEnd();
        console.group("SEMANA 5")
    }else{

    }
    console.group(`Dia ${i}`);
    console.log(`Trabajos de casa: ${dailyHomeworkMinutes} Minutos`);
    console.log(`Estudio: ${dailyStudyMinutes} Minutos`);
    console.log(`Trabajos de Universidad: ${minutesToDoPracticalWorkDaily} Minutos`);
    console.log(`Trabajo: ${dailyWorkingMinutes} Minutos`);
    console.groupEnd();
    
}