let carrito = [];
if (localStorage.getItem("Carrito")) {
  carrito = JSON.parse(localStorage.getItem("Carrito"));
}

let costoTotal = 0;
if (localStorage.getItem("costo")) {
  costoTotal = JSON.parse(localStorage.getItem("costo"));
}

// funcion para visualizar productos en el carrito
const ViewCost = () => {
  const VerCosto = document.getElementById("containerCosto");
  const VerCostoViejo = document.getElementById("costo");
  let vistaCosto = document.createElement("div");
  vistaCosto.setAttribute("id", "VerCosto");
  VerCosto.replaceChild(vistaCosto, VerCostoViejo);
  // Ver el costo total
  let costoTotalView = document.createElement("h2");
  costoTotalView.innerHTML = `El costo total de tus productos es de: $${costoTotal}`;
  vistaCosto.append(costoTotalView);
};

// Muestra los productos en el HTML
productos.forEach((producto) => {
  const contenedor = document.getElementById("flex2");
  let productView = document.createElement("div");
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

  const botonAgregar = document.getElementById(`btn${producto.id}`);

  // Verifica si ya en el carrito existe el producto agregado
  botonAgregar.onclick = () => {
    const existe = carrito.find((elemento) => elemento.id === producto.id);

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
    costoTotal = costoTotal + producto.price;

    console.log(carrito, costoTotal);

    localStorage.setItem("Carrito", JSON.stringify(carrito));
    localStorage.setItem("costo", costoTotal);
  };
});
