const urlObtenerProductos = 'https://www.formosa101.com/pruebaapi/api/obtenerProductos.php';


let listaProductos = []

const objProducto = {
    idProducto: '',
    nombreproducto: '',
    precio: ''
}

async function obtenerProductos() {

    listaProductos = await fetch(urlObtenerProductos)
    .then(respuesta => respuesta.json())
    .then(datos => datos)
    .catch(error => console.log(error))

    mostrarProductos()

}
obtenerProductos()

function mostrarProductos(){

    listaProductos.forEach(empleado => {
        const {idproducto, nombreproducto, precio, url} = empleado

        let parrafo = '<div class="carta2"><div class="imgbox"><img src="'+ url +'"></div>';
        parrafo += '<div class="contenido">';
        parrafo += '<h5>' + nombreproducto + '</h5>';
        parrafo += '<p>$' + precio;
        parrafo += '<img class="borrar" src="papelera.png"></p>';
        parrafo += '</div></div></div>';
        
        contenedor.innerHTML += parrafo;
    });
}