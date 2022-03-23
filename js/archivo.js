// uso del Spread
productos = [...tortas, ...galletas, ...combos];

let carrito = [];
if (localStorage.getItem("Carrito")) {
  carrito = JSON.parse(localStorage.getItem("Carrito"));
}

let costoTotal = 0;
if (localStorage.getItem("costo")) {
  costoTotal = JSON.parse(localStorage.getItem("costo"));
}

// Muestra los productos en el HTML
productos.forEach((producto) => {
  const contenedor = document.getElementById("flex2");
  let productView = document.createElement("div");
  // tarjetas
  productView.innerHTML = ` 
  <div class="card producto" style="width: 18rem">
  <img
       src="${producto.img}"
       class="card-img-top"
       />
       <div class="card-body">
           <h5 class="card-title">${producto.name}</h5>
           <p class="card-text">
               costo: $${producto.price}
               <button id="btn${producto.id}" class="btn btn-danger botones">Agregar "${producto.name}" al carrito</button>
           </p>
           </div>
       </div>
       `;
  contenedor.append(productView);

  // Verifica si ya en el carrito existe el producto agregado
  const botonAgregar = document.getElementById(`btn${producto.id}`);
  botonAgregar.onclick = () => {
    const existe = carrito.find((elemento) => elemento.id === producto.id);

    /*
      if (existe) {
        carrito.forEach((elemento) => {
         if (elemento.id === producto.id) {
            elemento.cantidad++;
          }
        });
      } else {
        carrito.push({
         name: producto.name,
         price: producto.price,
         id: producto.id,
         img: producto.img,
         cantidad: 1,
       });
     }
    */

    existe
      ? carrito.forEach((elemento) => {
          if (elemento.id === producto.id) {
            elemento.cantidad++;
          }
        })
      : carrito.push({
          name: producto.name,
          price: producto.price,
          id: producto.id,
          img: producto.img,
          cantidad: 1,
        });

    costoTotal = costoTotal + producto.price;

    console.log(carrito, costoTotal);

    localStorage.setItem("Carrito", JSON.stringify(carrito));
    localStorage.setItem("costo", costoTotal);

    alert("Se ha agregado tu producto");
  };
});
