class Materia{
    constructor(nombre, profesor, estudiantes){
        this.nombre = nombre;
        this.profesor = profesor;
        this.estudiantes = estudiantes;
    }
}

let materia1 = new Materia("Programacion", "Dalto Lopez", ["Santiago", "Paola", "Luisa", "Jhonny", "Cofla"]);
let materia2 = new Materia("Matematicas", "Julio Vargaz", ["Paola", "Raul", "Steve", "Luis", "Lorenzo", "Juan"]);
let materia3 = new Materia("Informatica", "Freddy Vega", ["jhonny", "Raul", "Santiago", "Luisa", "Pepe"]);

let materias = [materia1, materia2, materia3];

const mostrarMateria = (materia) =>{
    for(i = 0; i<materias.length; i++){
        if(materias[i].nombre == materia){
            document.write("Materia: " + materias[i].nombre + "<br />");
            document.write("Profesor: " + materias[i].profesor + "<br />");
            document.write("Estudiantes: " + materias[i].estudiantes + "<br /><br />");
        }else{

        }
    }
}


const buscarCofla = ()=>{
    for(i = 0 ;i< materias.length; i++ ){
        for(j=0; j<materias[i].estudiantes.length; j++){
            if(materias[i].estudiantes[j] == "Cofla"){
                document.write(`En ${materias[i].nombre} esta Cofla con el profesor ${materias[i].profesor} <br />`)
            }else{
                
            }
        }
    }
}

const inscribirMateria = (materia, estudiante) =>{
    for(i = 0; i< materias.length; i++){
        if(materias[i].nombre == materia){
            if(materias[i].estudiantes.length>=6){
                document.write(`Lo siento ${estudiante}, la materia ${materia} ya alcanzo el limite de estudiantes <br /><br />`);
            }else{
                materias[i].estudiantes.push(estudiante);
                document.write(`${estudiante} has sido inscrito con exito a ${materia} <br /><br />`);
            }
        }else{

        }
    }
}

inscribirMateria("Programacion", "Roberto");
inscribirMateria("Matematicas", "Roberto");
inscribirMateria("Informatica", "Lucia");
mostrarMateria("Programacion");
buscarCofla();