import Totalizador from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad-input");
const precioInput = document.querySelector("#precio-input");
const form = document.querySelector("#totalizador-form");
const cantDisplay = document.querySelector("#cantidad-display");
const precDisplay = document.querySelector("#precio-display");

const totalizador = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseInt(precioInput.value);

  totalizador.setCantidad(cantidad);
  totalizador.setPrecio(precio);

  cantDisplay.innerText = totalizador.getCantidad();
  precDisplay.innerText = totalizador.getPrecio();
});