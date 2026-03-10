class Totalizador {
  constructor() {
    this.cantidad = 0;
    this.precio = 0;
    this.estado = "CA";
    this.categoria = "Varios";
    this.impuestos = { "UT": 0.0665, "NV": 0.08, "TX": 0.0625, "AL": 0.04, "CA": 0.0825 };
    this.impuestosCategoria = { "Alimentos": 0,"Varios": 0,"Bebidas alcohólicas": 0.07,"Material de escritorio": 0, "Muebles": 0.03,"Electrónicos": 0.04,"Vestimenta": 0.02 };
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

  getDescuentoPorcentaje() {
    let neto = this.getNeto();
    if (neto >= 30000) return 0.15;
    if (neto >= 10000) return 0.10;
    if (neto >= 7000) return 0.07;
    if (neto >= 3000) return 0.05;
    if (neto >= 1000) return 0.03;
    return 0;
  }

  getDescuentoMonto() {
    return this.getNeto() * this.getDescuentoPorcentaje();
  }

  getPrecioConDescuento() {
    return this.getNeto() - this.getDescuentoMonto();
  }
  getImpuestoMonto() {
    return this.getPrecioConDescuento() * this.getImpuestoPorcentajeTotal();
  }

  getTotal() {
    return this.getPrecioConDescuento() + this.getImpuestoMonto();
  }

}

export default Totalizador;