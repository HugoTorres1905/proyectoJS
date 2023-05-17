const tbody = document.querySelector("tbody");
const spanTotal = document.querySelector("span#importeTotal");
const confirmarCompra = document.querySelector("button#confirmarCompra");

recuperarCarrito();

if (carrito.length > 0) {
  if (tbody !== null) {
    tbody.innerHTML = "";
    carrito.forEach(producto => {
      const filaHTML = retornoFilaCheckoutHTML(producto);
      tbody.innerHTML += filaHTML;
    });
  }
  if (spanTotal !== null) {
    spanTotal.innerText = "$" + calcularTotalCarrito();
  }
}

function activarClickEnBotonesEliminar() {
  const botones = document.querySelectorAll("button.button-quitar");
  botones.forEach(boton => {
    boton.addEventListener("click", e => {
      const codigoProducto = parseInt(e.target.dataset.codigo);
      const indice = carrito.findIndex(producto => producto.id === codigoProducto);
      if (indice !== -1) {
        carrito.splice(indice, 1);
        guardarCarrito();
        cargarProductos(); // Llamamos a la función cargarProductos definida en dom.js
        if (tbody !== null) {
          tbody.innerHTML = "";
          carrito.forEach(producto => {
            const filaHTML = retornoFilaCheckoutHTML(producto);
            tbody.innerHTML += filaHTML;
          });
        }
        if (spanTotal !== null) {
          spanTotal.innerText = "$" + calcularTotalCarrito();
        }
        activarClickEnBotonesEliminar();
      }
    });
  });
}

function calcularTotalCarrito() {
  let total = 0;
  carrito.forEach(producto => (total += producto.precio));
  return total;
}

if (confirmarCompra !== null) {
  confirmarCompra.addEventListener("click", () => {
    if (carrito.length > 0) {
      Swal.fire(
        'Muchas gracias por tu compra',
        'El pedido está en preparación. Te enviaremos un correo electrónico cuando esté listo',
        'success'
      );
    } else {
      Swal.fire("Error", "El carrito está vacío. Agrega productos antes de confirmar la compra.", "error");
    }
    localStorage.removeItem("carritoAlmacenado");
    recuperarCarrito();
  });
}

activarClickEnBotonesEliminar();