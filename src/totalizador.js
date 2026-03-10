class Totalizador {
  constructor() {
    this.cantidad = 0;
    this.precio = 0;
    this.estado = "CA";
    this.categoria = "Varios";
    this.metodoEnvio = "Económico";
    this.impuestos = { "UT": 0.0665, "NV": 0.08, "TX": 0.0625, "AL": 0.04, "CA": 0.0825 };
    this.impuestosCategoria = { "Alimentos": 0,"Varios": 0,"Bebidas alcohólicas": 0.07,"Material de escritorio": 0, "Muebles": 0.03,"Electrónicos": 0.04,"Vestimenta": 0.02 };
    this.descuentosCategoria = {"Alimentos": 0.02,"Material de escritorio": 0.015,"Electrónicos": 0.01,"Varios": 0,"Bebidas alcohólicas": 0,"Muebles": 0,"Vestimenta": 0};
    this.tarifasEnvio = {"Económico": 0,"Express": 20,"Prioritario": 50};
    this.tipoCliente = "Normal";
    this.descuentosCliente = { "Normal": 0, "Recurrente": 0.005, "Antiguo": 0.01 };
    this.pesoVolumetrico = 0;
}

setTipoCliente(tipo) {
  this.tipoCliente = tipo;
}

setMetodoEnvio(metodo) {
    this.metodoEnvio = metodo;
  }

getMetodoEnvio() {
  return this.metodoEnvio;
  }

getCostoEnvio() {
   let peso = this.pesoVolumetrico;
    let tarifaPorPeso = 0;
    if (peso > 200) tarifaPorPeso = 9;
    else if (peso >= 101) tarifaPorPeso = 8;
    else if (peso >= 81) tarifaPorPeso = 6.5; 
    else if (peso >= 41) tarifaPorPeso = 6;
    else if (peso >= 21) tarifaPorPeso = 5;
    else if (peso >= 11) tarifaPorPeso = 3.5;
    else tarifaPorPeso = 0;
    let recargoMetodo = this.tarifasEnvio[this.metodoEnvio] || 0;
    
    return (tarifaPorPeso * this.cantidad) + recargoMetodo;
  }

setPesoVolumetrico(peso) {
  this.pesoVolumetrico = peso;
}
getPesoVolumetrico() {
  return this.pesoVolumetrico;
}
getDescuentoCategoriaPorcentaje() {
    return this.descuentosCategoria[this.categoria] || 0;
  }

  getImpuestoCategoriaPorcentaje() {
    return this.impuestosCategoria[this.categoria] || 0;
  }

  getImpuestoPorcentajeTotal() {
    return (this.impuestos[this.estado] || 0) + this.getImpuestoCategoriaPorcentaje();
  }

  setCategoria(categoria) {
    this.categoria = categoria;
  }

  getCategoria() {
    return this.categoria;
  }

  setCantidad(cantidad) {
    this.cantidad = cantidad;
  }

  getCantidad() {
    return this.cantidad;
  }

  setPrecio(precio) {
    this.precio = precio;
  }

  getPrecio() {
    return this.precio;
  }

  getNeto() {
    return this.cantidad * this.precio;
  }

  setEstado(estado) {
    this.estado = estado;
  }

  getImpuestoPorcentaje() {
    return this.impuestos[this.estado] || 0;
  }

  getDescuentoPorcentajeTotal() {
    let neto = this.getNeto();
    let porcentajeVolumen = 0; 
    if (neto >= 30000) porcentajeVolumen = 0.15;
    else if (neto >= 10000) porcentajeVolumen = 0.10;
    else if (neto >= 7000) porcentajeVolumen = 0.07;
    else if (neto >= 3000) porcentajeVolumen = 0.05;
    else if (neto >= 1000) porcentajeVolumen = 0.03;
    let descExtraCliente = this.descuentosCliente[this.tipoCliente] || 0;
    return porcentajeVolumen + this.getDescuentoCategoriaPorcentaje()  + descExtraCliente;
  }

  getDescuentoPorcentaje() {
    return this.getDescuentoPorcentajeTotal();
  }
  getDescuentoMonto() {
    return this.getNeto() * this.getDescuentoPorcentajeTotal();
  }

  getPrecioConDescuento() {
    return this.getNeto() - this.getDescuentoMonto();
  }
  getImpuestoMonto() {
    return this.getPrecioConDescuento() * this.getImpuestoPorcentajeTotal();
  }

  getTotal() {
    return this.getPrecioConDescuento() + this.getImpuestoMonto()  + this.getCostoEnvio();
  }

}

export default Totalizador;