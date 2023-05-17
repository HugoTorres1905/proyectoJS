const tbody = document.querySelector("tbody")
const spanTotal = document.querySelector("span#importeTotal")
const confirmarCompra = document.querySelector("button#confirmarCompra")

recuperarCarrito()

if (carrito.length > 0) {
    carrito.forEach(producto => {
        tbody.innerHTML += retornoFilaCheckoutHTML(producto)
        spanTotal.innerText = "$" + calcularTotalCarrito()
    })
}

function activarClickEnBotonesEliminar() {
    const botones = document.querySelectorAll("button")
    if (botones !== null) {
        for (boton of botones) {
            boton.addEventlistener("click", (e)=>{
                let indice = carritoAlmacenado.findIndex(producto => producto.codigo === parseInt(e.target.id))
                    carritoAlmacenado.splice(indice, 1)            
                    recuperarCarrito()
                    cargarProductos()
            })
        }
    }
}

function calcularTotalCarrito() {
    let total = 0
    carritoAlmacenado.forEach(producto => total = total + producto.precio)
    return total
}

confirmarCompra.addEventlistener("click", ()=> { 
    Swal.fire(
        'Muchas gracias por tu compra',
        'El pedido esta en preparación. Te enviaremos un mail cuando esté listo',
        'success'
      ).
      localStorage.removeItem("carritoAlmacenado")
      recuperarCarrito()
})