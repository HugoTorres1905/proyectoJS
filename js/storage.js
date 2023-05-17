const carrito = [];
let carritoAlmacenado = [];

const guardarCarrito = () => {
    if (carrito.length > 0) {
        localStorage.setItem("carritoFob", JSON.stringify(carrito));
    }
};

const recuperarCarrito = () => {
    carritoAlmacenado = JSON.parse(localStorage.getItem("carritoFob"));
    if (carritoAlmacenado !== null) {
        carrito.push(...carritoAlmacenado);
    }
};

function calcularTotalCarrito() {
    let total = 0;
    if (carritoAlmacenado) {
        carritoAlmacenado.forEach(producto => total += producto.precio);
    }
    return total;
}

recuperarCarrito();