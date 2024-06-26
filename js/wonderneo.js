// wonder.js
function cargarDatosWonderNeo() {
    fetch('../../data/wonderneo.json')
        .then(response => response.json())
        .then(data => {
            crearTarjetas(data, 'wonderneo');
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function crearTarjetas(datos, className) {
    const tarjetasContainer = document.getElementById('tarjetas-container');
    datos.forEach(dato => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('col-sm-6', 'col-lg-4', className);

        const box = document.createElement('div');
        box.classList.add('box');

        const detalle = document.createElement('div');
        detalle.classList.add('img-box');

        const imagen = document.createElement('img');
        imagen.src = dato.imagen;
        imagen.alt = dato.titulo;

        const detailBox = document.createElement('div');
        detailBox.classList.add('detail-box');

        const titulo = document.createElement('h5');
        titulo.textContent = dato.titulo;

        const descripcion = document.createElement('p');
        descripcion.innerHTML = dato.descripcion;

        const opciones = document.createElement('div');
        opciones.classList.add('options');

        const precio = document.createElement('h6');
        precio.textContent = dato.precio;

        const boton = document.createElement('a');
        boton.href = dato.enlace;
        boton.classList.add('btn', 'btn-primary');
        boton.textContent = 'Ver disponibilidad';

        detalle.appendChild(imagen);
        detailBox.appendChild(titulo);
        detailBox.appendChild(descripcion);
        detailBox.appendChild(opciones);
        opciones.appendChild(precio);
        opciones.appendChild(boton);
        box.appendChild(detalle);
        box.appendChild(detailBox);
        tarjeta.appendChild(box);

        tarjetasContainer.appendChild(tarjeta);
    });
}

// Llamar a la función para cargar los datos cuando se cargue la página
// document.addEventListener('DOMContentLoaded', cargarDatosWonderNeo);
