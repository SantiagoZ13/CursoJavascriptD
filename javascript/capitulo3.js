class Celular{
    constructor (color, marca, memoria, ram, resolucion){
        this.color = color;
        this. marca = marca;
        this.memoria = memoria;
        this.ram = ram;
        this.resolucion = resolucion;
        this.info = `</br> Soy un telefono marca ${this.marca} de color ${this.color} con ${this.memoria} 
        GB de memoria, ${this.ram} GB de ram y una resolucion de ${this.resolucion} pixeles </br>`
        this.encendido = false;
    }
    apagar(){
        if (encendido == true){
            document.write("Apagandose...");
            this.encendido = false
        }else{
            document.write("El celular ya esta apagado")
        }
        
    }
    grabar(){
        document.write(`Grabando video con una resolucion de ${this.resolucion} pixeles`);
    }
    encender(){
        if(this.encendido == false){
            document.write("Prendiendo...");   
            this.encendido = true
        }else{
            document("Celular ya encendido")
        }
        
    }
    reiniciar(){
        if(this.encendido == true){
            document.write("Reiniciando...");
        }else{
            document.write("Para reiniciar el celular debe estar prendido")
        }
        
    }
    tomarFotos(){
        document.write(`Foto tomada con una resolucion de ${this.resolucion} pixeles`);
    }
    verInfo(){
        document.write(this.info);
    }
}

const celular1 = new Celular("Negro", "Xiaomi", 6, 2, "640 x 480");
const celular2 = new Celular("Gris", "Motorola", 8, 4, "640 x 480");
const celular3 = new Celular("Blanco", "Samsung", 16, 6, "960 x 540");

celular1.verInfo();
celular2.verInfo();
celular3.verInfo();

class CelularGamaAlta extends Celular{
    constructor(color, marca, memoria, ram, resolucion, camaras, desbloqueoFacial){
        super(color, marca, memoria, ram, resolucion);
        this.camaras = camaras
        this.desbloqueoFacial = desbloqueoFacial;
        this.encendido = false;
    }
    grabarModoSuperLento(){
        document.write(`Grabando en modo super lento con una resolucion de ${this.resolucion} pixeles`);
    }
    DesbloqueoFacial(){
        if(this.encendido == true){
            document.write("Desbloqueando...");
        }else{
            document.write("El celular debe estar prendido para desbloquearlo");
        }
        
    }
}

const celular4 = new CelularGamaAlta("Plateado", "Samsung", 16, 8, "1280 x 720", 2, true);
const celular5 = new CelularGamaAlta("Dorado", "Apple", 32, 6, "1920 x 1080", 4, true);


class VideoGame{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.info = `</br>Este Juego tiene ${this.descargas} descargas, tiene una pntuacion de ${this.puntuacion} 
        estrellas y pesa ${this.peso} MB </br>`
    }
    instalar(){
        document.write("Instalando...");
    }
    abrir(){
        document.write("Abriendo...");
    }
    cerrar(){
        document.write("Cerrando...");
    }
    desinstalar(){
        document.write("Desinstalando...");
    }
    verInfo(){
        document.write(this.info);
    }
}

const juego1 = new VideoGame("30k", 4, 100);
juego1.verInfo();
const juego2 = new VideoGame("2k", 3.8, 80);
juego2.verInfo();
const juego3 = new VideoGame("3m", 5, 1000);
juego3.verInfo();
const juego4 = new VideoGame("4m", 4.8, 900);
juego4.verInfo();
const juego5 = new VideoGame("10k", 3, 300);
juego5.verInfo();
const juego6 = new VideoGame("3k", 2, 200);
juego6.verInfo();
const juego7 = new VideoGame("1k", 2.5, 150);
juego7.verInfo();