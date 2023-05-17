
const container = document.querySelector("div#container")
const productos = []
const URL = 'js/productos.json'

const obtenerProductos = ()=> {
    fetch(URL)
        .then((response)=> response.json() )
        .then((data)=> productos.push(...data) )
        .then(()=> cargarProductos(productos) )
        .catch(error => {
            console.error(error)
            container.innerHTML = retornoCardError()
        })
}

const cargarProductos = (array)=> {
    array.forEach(producto => {
        container.innerHTML += retornoCardHTML(producto)
    })
    activarClickEnBotones()
}

const activarClickEnBotones = ()=> {
    const btnComprar = document.querySelectorAll("button.button.button-outline.button-add")
    for (boton of btnComprar) {
        boton.addEventListener("click", (event)=> {
            let resultado = productos.find(producto => producto.id === parseInt(event.target.id))
                carrito.push(resultado)
                guardarCarrito()
                console.table(carrito)
                 
        })
    }
}

obtenerProductos()
recuperarCarrito()
