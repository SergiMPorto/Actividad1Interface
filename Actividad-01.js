//Eventos

document.addEventListener("DocumentLoader",()=> {

    const piedra = document.getElementById('piedra');

    
    piedra.addEventListener('click', () => {
        piedra.style.borderColor = 'red'; 
    });
});
