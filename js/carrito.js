let carrito = [];
if (localStorage.getItem("Carrito")) {
  carrito = JSON.parse(localStorage.getItem("Carrito"));
}
let costoTotal = 0;
if (localStorage.getItem("costo")) {
  costoTotal = JSON.parse(localStorage.getItem("costo"));
}

const visualizar = () => {
  const containerGeneral = document.getElementById("carro");
  const contDeProdViejo = document.getElementById("contDeProd");
  let contDeProd = document.createElement("div");
  contDeProd.setAttribute("id", "contDeProd");
  containerGeneral.replaceChild(contDeProd, contDeProdViejo);

  carrito.forEach((prodCarrrito) => {
    let vistaCarrito = document.createElement("div");
    vistaCarrito.innerHTML = `
      <div class="card producto" style="width: 18rem">
      <img
           src="${prodCarrrito.img}"
           class="card-img-top img"
           />
           <div class="card-body">
               <h5 class="card-title">${prodCarrrito.name}</h5>
               <p class="card-text">
                   costo: $${prodCarrrito.price}
                   <br>
                   Cantidad: ${prodCarrrito.cantidad}
                   <button id="quitar${prodCarrrito.id}" class="btn btn-danger ">Quitar "${prodCarrrito.name}" del carrito</button>
               </p>
               </div>
           </div>
      `;
    contDeProd.append(vistaCarrito);

    const btnQuitar = document.getElementById(`quitar${prodCarrrito.id}`);
    btnQuitar.onclick = () => {
      carrito = carrito.filter((producto) => producto.id != prodCarrrito.id);
      costoTotal = costoTotal - prodCarrrito.price * prodCarrrito.cantidad;

      console.log(carrito, costoTotal);

      localStorage.setItem("Carrito", JSON.stringify(carrito));
      localStorage.setItem("costo", costoTotal);
      window.location.reload();
    };
  });

  // Ver el costo total
  const containerCosto = document.getElementById("containerCosto");
  const CostoViejo = document.getElementById("costo");
  let ContCosto = document.createElement("div");
  ContCosto.setAttribute("id", "ContCosto");
  containerCosto.replaceChild(ContCosto, CostoViejo);

  let costoTotalView = document.createElement("h2");
  if (costoTotal > 0) {
    costoTotalView.innerHTML = `El costo total de tus productos es de: $${costoTotal}`;
  } else {
    costoTotalView.innerHTML = `No hay nada en tu carrito`;
  }

  ContCosto.append(costoTotalView);
};

visualizar();
