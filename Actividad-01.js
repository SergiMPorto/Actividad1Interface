document.addEventListener("DOMContentLoaded", () => {
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
            opcion.style.width = '200px';
            opcion.style.height = '200px';
            opcion.style.borderColor = 'red';

            //    jugadaJugador == opcion;

            jugar();
        });

    }


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
let jugadaJugador = 1;
let jugadaMaquina;
let eleccion;

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



function jugar() {

    jugadaMaquina = Math.floor(Math.random() * 5);

    if (jugadaJugador === jugadaMaquina) {
        alert("Empate");
    } else if (
        (jugadaJugador === 0 && jugadaMaquina === 2) ||
        (jugadaJugador === 1 && jugadaMaquina === 0) ||
        (jugadaJugador === 1 && jugadaMaquina === 4) ||
        (jugadaJugador === 3 && jugadaMaquina === 4) ||
        (jugadaJugador === 4 && jugadaMaquina === 2) ||
        (jugadaJugador === 2 && jugadaMaquina === 3) ||
        (jugadaJugador === 3 && jugadaMaquina === 1) ||
        (jugadaJugador === 4 && jugadaMaquina === 0)
    ) {
        alert("Ganador");
    } else {
        alert("Perdedor");
    }
}