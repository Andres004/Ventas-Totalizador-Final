import Totalizador from "./totalizador.js";

const form = document.querySelector("#totalizador-form");
const cantidadInput = document.querySelector("#cantidad-input");
const precioInput = document.querySelector("#precio-input");
const pesoInput = document.querySelector("#peso-input");
const estadoSelect = document.querySelector("#estado-select");
const categoriaSelect = document.querySelector("#categoria-select");
const envioSelect = document.querySelector("#envio-select");

// Selectores para mostrar resultados
const cantDisplay = document.querySelector("#cantidad-display"); 
const precDisplay = document.querySelector("#precio-display");
const netoDisplay = document.querySelector("#neto-display");
const pesoDisplay = document.querySelector("#peso-display");
const descPorcDisplay = document.querySelector("#desc-porc-display");
const descMontoDisplay = document.querySelector("#desc-monto-display");
const descCatDisplay = document.querySelector("#desc-cat-display");
const impPorcDisplay = document.querySelector("#imp-porc-display");
const impCatPorcDisplay = document.querySelector("#imp-cat-porc-display");
const impMontoDisplay = document.querySelector("#imp-monto-display");
const totalDisplay = document.querySelector("#total-display");
const envioDisplay = document.querySelector("#envio-display");

const totalizador = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const peso = Number.parseFloat(pesoInput.value);
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value;
  const metodoEnvio = envioSelect.value;

  totalizador.setCantidad(cantidad);
  totalizador.setPrecio(precio);
  totalizador.setPesoVolumetrico(peso);
  totalizador.setEstado(estado);
  totalizador.setCategoria(categoria);
  totalizador.setMetodoEnvio(metodoEnvio);

  cantDisplay.innerText = totalizador.getCantidad();
  precDisplay.innerText = totalizador.getPrecio().toFixed(2);
  pesoDisplay.innerText = totalizador.getPesoVolumetrico();
  netoDisplay.innerText = totalizador.getNeto().toFixed(2);
  envioDisplay.innerText = totalizador.getCostoEnvio().toFixed(2);
  
  descCatDisplay.innerText = (totalizador.getDescuentoCategoriaPorcentaje() * 100) + "%";
  descPorcDisplay.innerText = (totalizador.getDescuentoPorcentajeTotal() * 100) + "%";
  descMontoDisplay.innerText = totalizador.getDescuentoMonto().toFixed(2);
  impCatPorcDisplay.innerText = (totalizador.getImpuestoCategoriaPorcentaje() * 100) + "%";
  impPorcDisplay.innerText = (totalizador.getImpuestoPorcentajeTotal() * 100).toFixed(2) + "%";
  impMontoDisplay.innerText = totalizador.getImpuestoMonto().toFixed(2);

  totalDisplay.innerText = totalizador.getTotal().toFixed(2);
});