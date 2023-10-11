//Eventos

document.addEventListener("load",()=> {

    const piedra = document.getElementById('piedra');

    
    piedra.addEventListener('click', () => {
        piedra.style.borderColor = 'red'; 
    });{
        
});


let jugador;
let maquina;
let piedram;
let piedra;
let tijera;
let tijeram;
let papel;
let papelm;
let lagarto;
let lagartom;
let spoock;
let spoockm;
let jugadaJugador;
let jugadaMaquina;


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

function juegoJugador(eleccion) {
    jugadaJugador = eleccion;
   
}

function juegoMaquina() {
    const opciones = ["piedram", "papelm", "tijeram", "lagartom", "spockm"];
    jugadaMaquina = opciones[Math.floor(Math.random() * opciones.length)];
}

function jugar() {
    if (jugadaJugador === jugadaMaquina) {
        alert("Empate");
    } else if (
        (jugadaJugador === "piedra" && jugadaMaquina === "tijeram") ||
        (jugadaJugador === "papel" && jugadaMaquina === "piedram") ||
        (jugadaJugador === "papel" && jugadaMaquina === "spoockm") ||
        (jugadaJugador === "lagarto" && jugadaMaquina === "spoockm") ||
        (jugadaJugador === "spoock" && jugadaMaquina === "tijeram") ||
        (jugadaJugador === "tijera" && jugadaMaquina === "lagartom") ||
        (jugadaJugador === "lagarto" && jugadaMaquina === "papelm") ||
        (jugadaJugador === "spoock" && jugadaMaquina === "piedram")
    ) {
        alert("Ganador");
    } else {
        alert("Perdedor");
    }
}