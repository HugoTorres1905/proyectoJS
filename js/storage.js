const carrito = []

const guardarCarrito = ()=> {
    if (carrito.length > 0) {
        localStorage.setItem("carritoFob", JSON.stringify(carrito))
       
    }
}
const recuperarCarrito = ()=> {
    const carritoAlmacenado = JSON.parse(localStorage.getItem("carritoFob"))
        if (carritoAlmacenado !== null) {
            carrito.push(...carritoAlmacenado) 
        }
}