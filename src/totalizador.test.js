import Totalizador from "./totalizador.js";

describe("Totalizador de Ventas", () => {


it("1. Ingresar cantidad de items y mostrar en pantalla lo ingresado", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(20);
    expect(totalizador.getCantidad()).toEqual(20);
});

it("2. Ingresar el precio por item y mostrar en pantalla lo ingresado", () => {
    let totalizador = new Totalizador();
    totalizador.setPrecio(3);
    expect(totalizador.getPrecio()).toEqual(3);
  });

it("3. Mostrar el precio neto (cantidad items x precio item)", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(20);
    totalizador.setPrecio(3);
    expect(totalizador.getNeto()).toEqual(60);
  });

it("4. Mostrar el porcentaje de impuesto que tiene ese estado", () => {
    let totalizador = new Totalizador();
    totalizador.setEstado("TX");
    expect(totalizador.getImpuestoPorcentaje()).toEqual(0.0625);
  });

it("5. debería calcular el monto del impuesto para CA (8.25% de 100)", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1);
    totalizador.setPrecio(100);
    totalizador.setEstado("CA");
    expect(totalizador.getImpuestoMonto()).toEqual(8.25);
  });

  it("5. debería calcular el precio total (Neto + Impuesto) para CA", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1);
    totalizador.setPrecio(100);
    totalizador.setEstado("CA");
    expect(totalizador.getTotal()).toEqual(108.25);
  });
});