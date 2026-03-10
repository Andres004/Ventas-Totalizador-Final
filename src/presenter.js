import Totalizador from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad-input");
const form = document.querySelector("#totalizador-form");
const cantDisplay = document.querySelector("#cantidad-display");

const totalizador = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  totalizador.setCantidad(cantidad);

  cantDisplay.innerText = totalizador.getCantidad();
});