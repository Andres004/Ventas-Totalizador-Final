class Totalizador {
  constructor() {
    this.cantidad = 0;
    this.precio = 0;
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
}

export default Totalizador;