const container = document.querySelector("div#container");
const productos = [];
const URL = 'js/productos.json';

const obtenerProductos = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            productos.push(...data);
            cargarProductos(productos);
        })
        .catch(error => {
            console.error(error);
            container.innerHTML = retornoCardError();
        });
};

const cargarProductos = (array) => {
    array.forEach(producto => {
        container.innerHTML += retornoCardHTML(producto);
    });
    activarClickEnBotones();
};

function activarClickEnBotones() {
    const btnComprar = document.querySelectorAll("button.button.button-outline.button-add");
    for (boton of btnComprar) {
      boton.addEventListener("click", (event) => {
        const productoSeleccionado = productos.find(producto => producto.id === parseInt(event.target.id));
        const productoExistente = carrito.find(item => item.id === productoSeleccionado.id);
        if (productoExistente) {
          productoExistente.cantidad++;
        } else {
          productoSeleccionado.cantidad = 1;
          carrito.push(productoSeleccionado);
        }
        guardarCarrito();
        console.table(carrito);
      });
    }
  }

obtenerProductos();
recuperarCarrito();