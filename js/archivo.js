const misProd = "js/data/data.json";

let carrito = [];
if (localStorage.getItem("Carrito")) {
  carrito = JSON.parse(localStorage.getItem("Carrito"));
}

let costoTotal = 0;
if (localStorage.getItem("costo")) {
  costoTotal = JSON.parse(localStorage.getItem("costo"));
}

fetch(misProd)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    data.forEach((producto) => {
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
    });
  });

/*
  Elegi usar el Toastify para poder avisarle al usuario las acciones que va realizando sin interrumpir su interaccion con la pagina.

  Elegi usar el Sweet Alert para poder consultar al usuario la decision de eliminar un producto del carrito o si clickeo sin querer (para ahorrarle tener que ir otra vez a la pagina de productos).
*/
