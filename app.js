let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el Número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');  // al acertar el juego habilita el boton de reiniciar un nuevo juego.

    }else{
        // el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}


function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    // mensaje de intervalo de numeros
    // generar el numero aleatorio
    // reiniciar el  uemro de intentos
    condicionesIniciales();
    // desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');  // se setea para asignar el valor de disabled al boton de reiniciar juego

}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados)

    // validamos si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaron todos los numeros posibles.')
        
    }else{
        // si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}


condicionesIniciales();
