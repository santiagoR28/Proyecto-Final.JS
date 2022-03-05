const tortas = [
  { producto: "red velvet", costo: 2500 },
  { producto: "chocolate", costo: 3000 },
  { producto: "vainilla", costo: 2500 },
];

const galletas = [
  { producto: "queso", costo: 400 },
  { producto: "red velvet", costo: 400 },
  { producto: "chocolate", costo: 550 },
  { producto: "vainilla", costo: 250 },
];

const delivery = [
  { distancia: "1km", costo: 150 },
  { distancia: "2km", costo: 250 },
  { distancia: "3km o mas", costo: 300 },
];

// costo del producto (producto + delivery)
let costoTotal = 0;

// el usuario ingresa la categoria del producto que busca
const producto = prompt(
  "Hola!, que quieres pedir?, tenemos en stock tortas y galletas."
);

// suma
const suma = (a, b) => a + b;

if (producto == "tortas") {
  // se le muestra la lista de productos al usuario
  alert("Aqui te traemos la lista de tortas y su precio que tenemos en stock:");
  tortas.forEach((pasteles) => {
    alert(`torta de ${pasteles.producto}, su costo es de $${pasteles.costo}`);
  });

  // el usuario ingresa el producto que quiere
  const pedido = prompt("que torta deseas encargar?");
  const torta = tortas.find((p) => p.producto == pedido);
  costoTotal = suma(costoTotal, torta.costo);

  // el usuario ingresa el costo del delivery
  const envio = prompt(
    "para el delivery.. estas a 1km (+$150), a 2km (+$250) o 3km o mas (+$300)?"
  );
  const km = delivery.find((p) => p.distancia == envio);
  costoTotal = suma(costoTotal, km.costo);

  alert(`El costo total del encargo son: $${costoTotal}`);
} else {
  // se le muestra la lista de productos al usuario
  alert(
    "Aqui te traemos la lista de galletas y su precio que tenemos en stock:"
  );
  galletas.forEach((galletas) => {
    alert(`galleta de ${galletas.producto}, su costo es de $${galletas.costo}`);
  });

  // el usuario ingresa el producto que quiere
  const pedido = prompt("que torta deseas encargar?");
  const galleta = galletas.find((p) => p.producto == pedido);
  costoTotal = suma(costoTotal, galleta.costo);

  // el usuario ingresa el costo del delivery
  const envio = prompt(
    "para el delivery.. estas a 1km (+$150), a 2km (+$250) o 3km o mas (+$300)?"
  );
  const km = delivery.find((p) => p.distancia == envio);
  costoTotal = suma(costoTotal, km.costo);

  alert(`El costo total del encargo son: $${costoTotal}`);
}
