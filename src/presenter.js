import Totalizador from "./totalizador.js";

const form = document.querySelector("#totalizador-form");
const cantidadInput = document.querySelector("#cantidad-input");
const precioInput = document.querySelector("#precio-input");
const pesoInput = document.querySelector("#peso-input");
const estadoSelect = document.querySelector("#estado-select");
const categoriaSelect = document.querySelector("#categoria-select");
const envioSelect = document.querySelector("#envio-select");
const clienteSelect = document.querySelector("#cliente-select");


const cantDisplay = document.querySelector("#cantidad-display"); 
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
const metodoResDisplay = document.querySelector("#metodo-res-display");

const totalizador = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value) || 0;
  const precio = Number.parseFloat(precioInput.value) || 0;
  const peso = Number.parseFloat(pesoInput.value) || 0;
  
  totalizador.setCantidad(cantidad);
  totalizador.setPrecio(precio);
  totalizador.setPesoVolumetrico(peso);
  totalizador.setEstado(estadoSelect.value);
  totalizador.setCategoria(categoriaSelect.value);
  totalizador.setMetodoEnvio(envioSelect.value);
  totalizador.setTipoCliente(clienteSelect.value);

  cantDisplay.innerText = totalizador.getCantidad();
  pesoDisplay.innerText = totalizador.getPesoVolumetrico();
  netoDisplay.innerText = "$" + totalizador.getNeto().toFixed(2);
  envioDisplay.innerText = "$" + totalizador.getCostoEnvio().toFixed(2);
  metodoResDisplay.innerText = totalizador.getMetodoEnvio();
  
  descCatDisplay.innerText = (totalizador.getDescuentoCategoriaPorcentaje() * 100).toFixed(1) + "%";
  descPorcDisplay.innerText = (totalizador.getDescuentoPorcentajeTotal() * 100).toFixed(1) + "%";
  descMontoDisplay.innerText = "-$" + totalizador.getDescuentoMonto().toFixed(2);
  
  impCatPorcDisplay.innerText = (totalizador.getImpuestoCategoriaPorcentaje() * 100) + "%";
  impPorcDisplay.innerText = (totalizador.getImpuestoPorcentajeTotal() * 100).toFixed(2) + "%";
  impMontoDisplay.innerText = "+$" + totalizador.getImpuestoMonto().toFixed(2);

  totalDisplay.innerText = "$" + totalizador.getTotal().toFixed(2);
});