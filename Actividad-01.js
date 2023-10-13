function cargarPagina() {
    
    const imagenes = document.querySelectorAll('.opcion');

    
    const imagenRing = document.getElementById('ring');

    
    imagenes.forEach((imagen) => {
        imagen.addEventListener('mouseover', function () {
           
            imagen.classList.add('superpuesta');

           
            imagenRing.innerHTML = '';
            imagenRing.appendChild(imagen);
        });
    });

    
    imagenRing.addEventListener('click', function () {
        
        const imagenSuperpuesta = document.querySelector('.superpuesta');
        if (imagenSuperpuesta) {
            imagenSuperpuesta.classList.remove('superpuesta');
        }
        
        imagenRing.innerHTML = '';
    });
}

document.addEventListener('DOMContentLoaded', cargarPagina);
