let pago = [];
if (localStorage.getItem("Carrito")) {
  pago = JSON.parse(localStorage.getItem("Carrito"));
}

let costopagar = 0;
if (localStorage.getItem("costo")) {
  costopagar = JSON.parse(localStorage.getItem("costo"));
}

const pagarProd = () => {
  const containerPago = document.getElementById("prod");
  const contPagoViejo = document.getElementById("pago");
  let contDePago = document.createElement("div");
  contDePago.setAttribute("id", "contDeProd");
  containerPago.replaceChild(contDePago, contPagoViejo);

  pago.forEach((pagar) => {
    let vistaPagar = document.createElement("div");
    vistaPagar.innerHTML = `
        <div class="card producto" style="width: 18rem">
        <img
             src="${pagar.img}"
             class="card-img-top img"
             />
             <div class="card-body">
                 <h5 class="card-title">${pagar.name}</h5>
                 <p class="card-text">
                     costo: $${pagar.price}
                     <br>
                     Cantidad: ${pagar.cantidad}
                 </p>
                 </div>
             </div>
        `;
    contDePago.append(vistaPagar);
  });
};
pagarProd();

const monto = () => {
  const contenedorMonto = document.getElementById("montoTotal");
  contenedorMonto.innerHTML = `El monto total es $${costopagar}`;
};
monto();

const pagar = document.getElementById("pagoHecho");
pagar.addEventListener("click", function (event) {
  event.preventDefault();

  Swal.fire({
    title:
      "Se ha realizado el pago, dentro de las proximas 24hrs recibiras tu pedido",
    icon: "success",
    confirmButtonText: "Ok!",
  });

  setTimeout(() => {
    window.location.href = "index.html";
  }, 4000);

  localStorage.clear();
});
