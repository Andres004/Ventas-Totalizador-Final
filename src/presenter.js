import Totalizador from "./totalizador.js";

const form = document.querySelector("#totalizador-form");
const cantidadInput = document.querySelector("#cantidad-input");
const precioInput = document.querySelector("#precio-input");
const estadoSelect = document.querySelector("#estado-select");
const categoriaSelect = document.querySelector("#categoria-select");

// Selectores para mostrar resultados
const cantDisplay = document.querySelector("#cantidad-display"); // AGREGADO
const precDisplay = document.querySelector("#precio-display"); // AGREGADO
const netoDisplay = document.querySelector("#neto-display");
const descPorcDisplay = document.querySelector("#desc-porc-display");
const descMontoDisplay = document.querySelector("#desc-monto-display");
const impPorcDisplay = document.querySelector("#imp-porc-display");
const impCatPorcDisplay = document.querySelector("#imp-cat-porc-display");
const impMontoDisplay = document.querySelector("#imp-monto-display");
const totalDisplay = document.querySelector("#total-display");

const totalizador = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value;

  totalizador.setCantidad(cantidad);
  totalizador.setPrecio(precio);
  totalizador.setEstado(estado);
  totalizador.setCategoria(categoria);

  cantDisplay.innerText = totalizador.getCantidad();
  precDisplay.innerText = totalizador.getPrecio().toFixed(2);

  netoDisplay.innerText = totalizador.getNeto().toFixed(2);
  
  descPorcDisplay.innerText = (totalizador.getDescuentoPorcentaje() * 100) + "%";
  descMontoDisplay.innerText = totalizador.getDescuentoMonto().toFixed(2);
  impCatPorcDisplay.innerText = (totalizador.getImpuestoCategoriaPorcentaje() * 100) + "%";
  impPorcDisplay.innerText = (totalizador.getImpuestoPorcentajeTotal() * 100).toFixed(2) + "%";
  impMontoDisplay.innerText = totalizador.getImpuestoMonto().toFixed(2);

  totalDisplay.innerText = totalizador.getTotal().toFixed(2);
});