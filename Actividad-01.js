document.addEventListener("DOMContentLoaded", () => {

    let juegoIniciado = false; 

    const botonStart = document.getElementById('boton-start');

    const inputNombre = document.getElementById('nombre'); 

    // Deshabilitamos el botón "Start" inicialmente
    botonStart.disabled = true;

    //SE PUEDE METER EN UNA FUNCION
    inputNombre.addEventListener('input', () => {
        if (inputNombre.value !== '') { // Habilita el botón si hay algún valor
            botonStart.disabled = false;
        } else { // Deshabilita el botón si no hay valor
            botonStart.disabled = true;
        }
    });

    
    function iniciarOReiniciarJuego() {
        if (!juegoIniciado) { 
            const opciones = document.getElementsByClassName("opcion");

            for (const opcion of opciones) {
                opcion.addEventListener('mouseover', () => {
                    opcion.style.width = '200px';
                    opcion.style.height = '200px';
                    opcion.style.borderColor = 'red';
                });

                opcion.addEventListener('mouseout', () => {
                    opcion.style.width = '150px';
                    opcion.style.height = '150px';
                    opcion.style.borderColor = 'initial';
                });

                opcion.addEventListener('click', () => {
                    const eleccion = opcion.id;
                    jugar(eleccion);
                });
            }

            juegoIniciado = true; 
            botonStart.textContent = 'RESTART'; 
        } else { 
            reiniciarJuego();
            juegoIniciado = false; 
            botonStart.textContent = 'START'; 
        }
    }

    botonStart.addEventListener('click', iniciarOReiniciarJuego);
    
   
});

let jugador;
let maquina;
let piedram;
let piedra = 0;
let tijera = 2;
let tijeram;
let papel = 1;
let papelm;
let lagarto = 3;
let lagartom;
let spoock = 4;
let spoockm;
let jugadaJugador;
let jugadaMaquina;
let eleccion;
let victorias = 0;
let derrotas = 0;

const imagenesElecciones = {
    0: 'img/manopiedra.png',
    1: 'img/manopapel.png',
    2: 'img/manotijera.png',
    3: 'img/manolagarto.png',
    4: 'img/manospock.png'
};

function iniciarVariable() {
    jugador = document.getElementsByClassName("jugador");
    maquina = document.getElementsByClassName("maquina");
    piedra = document.getElementById("piedra");
    piedram = document.getElementById("piedram");
    tijera = document.getElementById("tijera");
    tijeram = document.getElementById("tijeram");
    papel = document.getElementById("papel");
    papelm = document.getElementById("papelm");
    lagarto = document.getElementById("lagarto");
    lagartom = document.getElementById("lagartom");
    spoock = document.getElementById("spoock");
    spoockm = document.getElementById("spoockm");
}

function iniciarJuego(){

    const botonStart = document.getElementById('boton-start');

    botonStart.addEventListener('click', () => {
        const opciones = document.getElementsByClassName("opcion");

        for (const opcion of opciones) {
            opcion.addEventListener('mouseover', () => {
                opcion.style.width = '200px';
                opcion.style.height = '200px';
                opcion.style.borderColor = 'red';
            });

            opcion.addEventListener('mouseout', () => {
                opcion.style.width = '135px';
                opcion.style.height = '101px';
                opcion.style.borderColor = 'initial';
            });

            opcion.addEventListener('click', () => {
                const eleccion = opcion.id;
                jugar(eleccion);

               
            });
        }

        
    });
}

function actualizarMarcador() {
    const marcador = document.getElementById('marcador');
    marcador.textContent = `${victorias}-${derrotas}`;
}

function actualizarRing(eleccionJugador, eleccionMaquina) {
    const ring = document.querySelector('.ring');

    ring.innerHTML = '';

    const imagenJugador = document.createElement('img');
    imagenJugador.src = imagenesElecciones[eleccionJugador];
    imagenJugador.classList.add('eleccion');

    const imagenMaquina = document.createElement('img');
    imagenMaquina.src = imagenesElecciones[eleccionMaquina];
    imagenMaquina.classList.add('eleccion');

    ring.appendChild(imagenJugador);
    ring.appendChild(imagenMaquina);
}



function reiniciarJuego() {
    // Restablecer variables
    victorias = 0;
    derrotas = 0;
    jugadaJugador = undefined;
    jugadaMaquina = undefined;

    // Actualizar el marcador
    actualizarMarcador();

    // Limpiar el resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = '';

    // Limpiar el cuadro de texto del nombre
    const inputNombre = document.getElementById('nombre');
    inputNombre.value = '';

    // Deshabilitar el botón "START"
    const botonStart = document.getElementById('boton-start');
    
    botonStart.textContent = 'START';
    inputNombre.addEventListener('input', () => {
        if (inputNombre.value !== '') { // Habilita el botón si hay algún valor
            botonStart.disabled = false;
        } else { // Deshabilita el botón si no hay valor
            botonStart.disabled = true;
        }
    });

    // Restablecer el ring con la imagen inicial
    const ring = document.querySelector('.ring');
    ring.innerHTML = '';
    const imagenRing = document.createElement('img');
    imagenRing.src = 'img/boxeo.jpg';

    // Aplicar características de CSS a la imagen
    imagenRing.style.maxWidth = '90%';
    imagenRing.style.maxHeight = '100%';
    imagenRing.style.position = 'relative';

    ring.appendChild(imagenRing);

    

    // Habilitar eventos de opciones
    habilitarEventosOpciones();
}

function jugar(eleccion) {
    jugadaJugador = parseInt(eleccion);
    jugadaMaquina = Math.floor(Math.random() * 5);

    actualizarRing(jugadaJugador, jugadaMaquina);

    const resultado = document.getElementById('resultado');

    if (jugadaJugador === jugadaMaquina) {
        resultado.textContent = "EMPATE";
    } else {
        if (
            (jugadaJugador === 0 && jugadaMaquina === 2) ||
            (jugadaJugador === 1 && jugadaMaquina === 0) ||
            (jugadaJugador === 1 && jugadaMaquina === 4) ||
            (jugadaJugador === 3 && jugadaMaquina === 4) ||
            (jugadaJugador === 4 && jugadaMaquina === 2) ||
            (jugadaJugador === 2 && jugadaMaquina === 3) ||
            (jugadaJugador === 3 && jugadaMaquina === 1) ||
            (jugadaJugador === 4 && jugadaMaquina === 0)
        ) {
            resultado.textContent = "JUGADOR HA GANADO";
            victorias++;
        } else {
            resultado.textContent = "LA MAQUINA HA GANADO";
            derrotas++;
        }
    }
    //Actualizamos marcador
    actualizarMarcador();

    //Cambiamos las propiedades del boton start y lo convertimos en un boton de restart
    const botonStart = document.getElementById('boton-start');
    botonStart.textContent = 'RESTART';
    botonStart.addEventListener('click', reiniciarJuego);
    
}