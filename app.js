let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);


/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'indica  un numero del 1 al 10';*/




/*function asignarTextoElemento(){
    let titulo = document.querySelector('h1'); 
    titulo.innerHTML = 'Juego del numero secreto';
}*/
//-----------ETIQUETAS---------------

function asignarTextoElemento(elemento, texto){// asignar una variable a la etiqueta y texto del html
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

//-------------INPUT-----------------------------

function verificarIntento() {
    //let numeroDeUsuario = document.querySelector('input');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //llamando a la etiqueta ID del html
    if (numeroDeUsuario === numeroSecreto){ //si el nuusuario es identico a nusecreto
       asignarTextoElemento('p',`Acertaste en Número en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`) ; // etiqueta P
        document.getElementById('reiniciar').removeAttribute('disabled');// activar el boton desactivado ,despues de concluir el juego
    } else { //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) { //si numerousuario es mayor a nusecreto
            asignarTextoElemento('p','El número es menor'); 
        } else { // de lo contrario e
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++; //la cantidad de intentos
        limpiarCaja(); //invocando la funcion limpiarcaja
    }
    return;    
}
function limpiarCaja() {
   /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value='';*/
    document.querySelector('#valorUsuario').value = '';
    
    
    
}

//-----------------PARA GENERAL EL NUMERO SECRETO--------------------


function generarNumeroSecreto() {// la variable 
   //return Math.floor(Math.random()*10)+1;// generando un numero entre el 1 y 10
 let numeroGenerador = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerador);
console.log(listaNumeroSorteado);
//Si ya sorteamos todo los numeros
if(listaNumeroSorteado.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
}else{
 //si el numero generado esta en la lista 

 if (listaNumeroSorteado.includes(numeroGenerador)){
    return generarNumeroSecreto();
 }else{
    listaNumeroSorteado.push(numeroGenerador);
    return numeroGenerador;
 }
}
}
/*function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;
}*/
function condicionesIniciales(){ //se creo una funcion para los mensajes 
    asignarTextoElemento('h1', 'juego del mundo Secreto');// asignar una variable a la etiqueta H1 y y texto
    asignarTextoElemento('p', `indica  un numero del 1 al ${numeroMaximo}`);// asignar una variable a la etiqueta P y y texto 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //Generar numero aleatorio
    //inicializar el numero intento
    condicionesIniciales();
    //deshsbilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');// 
    
}

condicionesIniciales();

