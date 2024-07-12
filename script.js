const urlObtenerProductos = 'https://www.formosa101.com/pruebaapi/api/obtenerProductos.php';
const urlAgregarProducto = 'https://www.formosa101.com/pruebaapi/api/agregarProducto.php'
const urlBorrarProducto = 'https://www.formosa101.com/pruebaapi/api/borrarProducto.php'

let listaProductos = []

const objProducto = {
    idProducto: '',
    nombreproducto: '',
    precio: ''
}

const formulario = document.querySelector('#formulario');

const nombreInput = document.querySelector('#nombre');
const precioInput = document.querySelector('#precio');
const imagenInput = document.querySelector('#imagen');


function validarFormulario(e) {
    e.preventDefault()

    if([nombreInput.value, precioInput.value, imagenInput.value].includes('')) {
        alert('Todos los campos son obligatorios')
        return
    }

    /*if(editando) {
        editarEmpleado()
        editando = false
    } else {
        objEmpleado.idUsuario = Date.now()*/
        objProducto.nombreproducto = nombreInput.value
        objProducto.precio = precioInput.value
        objProducto.url = imagenInput.value

        agregarProducto();
    //}
}

async function agregarProducto() {

    const res = await fetch(urlAgregarProducto,
        {
            method: 'POST',
            body: JSON.stringify(objProducto)
        })
        .then(respuesta => respuesta.json())
        .then(data => data)
        .catch(error => alert(error))
        console.log(res.msg);
    if(res.msg === 'OK') {
        alert('Se registro exitosamente')
        limpiarHTML()
        obtenerProductos()

        formulario.reset()
        limpiarObjeto()
    }
}

async function eliminarProducto(id) {

    const res = await fetch(urlBorrarProducto,
        {
            method: 'POST',
            body: JSON.stringify({'idproducto': id})
        })
        .then(respuesta => respuesta.json())
        .then(data => data)
        .catch(error => alert(error))

       if(res.msg === 'OK') {
            alert('Se borró exitosamente')

            limpiarHTML();
            obtenerProductos();
            limpiarObjeto();
        }
        else console.log(res.msg);

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
        parrafo += '<div id="precio">$' + precio;
        parrafo += '<img class="borrar" src="papelera.png" onclick="eliminarProducto('+ idproducto +')"></div>';
        parrafo += '</div></div></div>';
        
        contenedor.innerHTML += parrafo;
    });
}

formulario.addEventListener('submit', validarFormulario);

function limpiarHTML() {
    const divcontenedor = document.querySelector('.contenedor');
    while(divcontenedor.firstChild) {
        divcontenedor.removeChild(divcontenedor.firstChild)
    }
}

function limpiarObjeto() {
    objProducto.idproducto = ''
    objProducto.nombreproducto = ''
    objProducto.precio = ''
    objProducto.url = ''
}