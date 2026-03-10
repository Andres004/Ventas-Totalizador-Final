import Totalizador from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad-input");
const precioInput = document.querySelector("#precio-input");
const estadoInput = document.querySelector("#estado-input");
const form = document.querySelector("#totalizador-form");
const cantDisplay = document.querySelector("#cantidad-display");
const precDisplay = document.querySelector("#precio-display");
const netoDisplay = document.querySelector("#neto-display");
const impPorcDisplay = document.querySelector("#impuesto-porcentaje-display");

const totalizador = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseInt(precioInput.value);
  const estado = estadoInput.value.toUpperCase();

  totalizador.setCantidad(cantidad);
  totalizador.setPrecio(precio);
  totalizador.setEstado(estado);

  cantDisplay.innerText = totalizador.getCantidad();
  precDisplay.innerText = totalizador.getPrecio();
  netoDisplay.innerText = totalizador.getNeto();
  impPorcDisplay.innerText = (totalizador.getImpuestoPorcentaje() * 100).toFixed(2);
});