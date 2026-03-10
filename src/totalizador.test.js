import Totalizador from "./totalizador.js";

describe("Totalizador de Ventas", () => {
  it("1. Ingresar cantidad de items y mostrar en pantalla lo ingresado", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(20);
    expect(totalizador.getCantidad()).toEqual(20);
  });
});