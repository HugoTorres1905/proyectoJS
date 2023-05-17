const retornoCardHTML = (producto) => {
    return `<div class="card">
             <div class="card-codigo">${producto.imagen}</div>
             <div class="card-name">${producto.nombre}</div>
             <div class="card-price">${producto.precio}</div>
             <div class="card-button">
                 <button class="button button-outline button-add" id=${producto.id}title="Clic para agregar al carrito">+</button>
           </div>`
 } 
  const retornoCardError = () => {
      return `<div class="card-error">
                  <h2>Houston, tenemos un problema 🔌</h2>
                  <h3>No pudimos cargar los productos. 🤦🏻‍♂️</h3>
                  <h3>Intenta nuevamente en unos instantes...</h3>
              </div>`
 
}
 
const retornoFilaCheckoutHTML = (producto) => {
    return `
      <tr>
        <td>${producto.imagen}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
          <button data-codigo="${producto.codigo}" class="button-quitar">X</button>
        </td>
      </tr>
    `;
  };
  
  
  
  
  
  