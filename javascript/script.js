let robertoInput = parseInt(document.getElementById('roberto'));
let pedroInput = parseInt(document.getElementById('pedro'));
let coflaInput = parseInt(document.getElementById('cofla'));

function mostrarResultados(){
    let dineroRoberto = robertoInput.value;
    let dineroPedro = pedroInput.value;
    let dineroCofla = coflaInput.value;
    let suma = dineroRoberto+dineroCofla+dineroPedro;
    let resultadoParrafo = document.getElementById('result');
    resultadoParrafo.innerText = 'La cantidad total del dinero es $' + suma;
}