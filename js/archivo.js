const misProd = "js/data/data.json";

let carrito = [];
if (localStorage.getItem("Carrito")) {
  carrito = JSON.parse(localStorage.getItem("Carrito"));
}

let costoTotal = 0;
if (localStorage.getItem("costo")) {
  costoTotal = JSON.parse(localStorage.getItem("costo"));
}

const mostrarProducto = (producto) => {
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
};

const guardarEnStorage = (carrito, costoTotal) => {
  localStorage.setItem("Carrito", JSON.stringify(carrito));
  localStorage.setItem("costo", costoTotal);
};

const agregarAlCarrito = (producto) => {
  // Verifica si ya en el carrito existe el producto agregado
  const botonAgregar = document.getElementById(`btn${producto.id}`);
  botonAgregar.onclick = () => {
    const existe = carrito.find((elemento) => elemento.id === producto.id);

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
    guardarEnStorage(carrito, costoTotal);
    mostrarAviso();
  };
};

const mostrarAviso = () => {
  // Toastify
  Toastify({
    text: "Se ha agregado tu producto",
    duration: 2000,
    position: "left",
    style: {
      background: "#bd5c56",
    },
  }).showToast();
};

const obtenerProductos = () => {
  fetch(misProd)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      data.forEach((producto) => {
        mostrarProducto(producto);
        agregarAlCarrito(producto);
        console.log(carrito, costoTotal);
      });
    });
};

obtenerProductos();
