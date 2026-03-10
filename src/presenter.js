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
  const impMontoDisplay = document.querySelector("#impuesto-monto-display");
  const totalDisplay = document.querySelector("#total-display");

  totalizador.setCantidad(cantidad);
  totalizador.setPrecio(precio);
  totalizador.setEstado(estado);

  cantDisplay.innerText = totalizador.getCantidad();
  precDisplay.innerText = totalizador.getPrecio();
  netoDisplay.innerText = totalizador.getNeto();
  impPorcDisplay.innerText = (totalizador.getImpuestoPorcentaje() * 100).toFixed(2);
  impMontoDisplay.innerText = totalizador.getImpuestoMonto().toFixed(2);
  totalDisplay.innerText = totalizador.getTotal().toFixed(2);
});