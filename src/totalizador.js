class Totalizador {
  constructor() {
    this.cantidad = 0;
    this.precio = 0;
    this.estado = "";
    this.impuestos = { "UT": 0.0665, "NV": 0.08, "TX": 0.0625, "AL": 0.04, "CA": 0.0825 };
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
    return this.getPrecioConDescuento() * this.getImpuestoPorcentaje();
  }

  getTotal() {
    return this.getPrecioConDescuento() + this.getImpuestoMonto();
  }

}

export default Totalizador;