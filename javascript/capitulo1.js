let robertoInput = document.getElementById('roberto');
let pedroInput = document.getElementById('pedro');
let coflaInput = document.getElementById('cofla');
let cambiotxt = document.getElementById('result3');
let heladotxt = document.getElementById('result2');
let resultadoCantidadtxt = document.getElementById('result1');

let agua = 0.6, crema = 1, heladix = 1.6, heladovinch = 1.7, heraldo = 1.8, pote = 2.9;

function mostrarCambio(helado, suma){
    let cambio = suma-helado;
    cambio = cambio.toFixed(2);
    cambiotxt.innerText = `Tu cambio seria $${cambio}`
}

function mostrarResultados(){
    let dineroRoberto = parseFloat(robertoInput.value);
    let dineroPedro = parseFloat(pedroInput.value);
    let dineroCofla = parseFloat(coflaInput.value);
    let suma = dineroRoberto+dineroCofla+dineroPedro;
    suma = suma.toFixed(2);
    resultadoCantidadtxt.innerText = `La cantidad total del dinero es $${suma}`;
    if(suma >= pote){
        heladotxt.innerText = `El helado mas caro es el pote de helado 1/4 KG`
        mostrarCambio(pote, suma);
    }else if(suma >= heraldo){
        heladotxt.innerText = `El helado mas caro es el helado heraldo`
        mostrarCambio(heraldo, suma);
    }else if(suma >= heladovinch){
        heladotxt.innerText = `El helado mas caro es el helado heladovinch`
        mostrarCambio(heladovinch, suma);
    }else if(suma >= heladix){
        heladotxt.innerText = `El helado mas caro es el helado heladix`
        mostrarCambio(heladix, suma);
    }else if(suma >= crema){
        heladotxt.innerText = `El helado mas caro es el helado de crema`
        mostrarCambio(crema, suma);
    }else if(suma >= agua){
        heladotxt.innerText = `El helado mas caro es el helado de agua`
        mostrarCambio(agua, suma);
    }else{
        heladotxt.innerText = `No te alcansa para ningun helado`
        cambiotxt.innerText = `Te faltan $${(agua-suma).toFixed(2)}`
    }
}