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

  it("6. debería calcular el total con el impuesto de AL (4.00%)", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1);
    totalizador.setPrecio(100);
    totalizador.setEstado("AL");
    expect(totalizador.getTotal()).toEqual(104);
  });

  it("7. debería calcular el total con el impuesto de NV (8.00%)", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1);
    totalizador.setPrecio(100);
    totalizador.setEstado("NV");
    expect(totalizador.getTotal()).toEqual(108);
  });

  it("8. debería calcular el total con el impuesto de UT (6.65%)", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1);
    totalizador.setPrecio(100);
    totalizador.setEstado("UT");
    expect(totalizador.getTotal()).toEqual(106.65);
  });

  it("9. debería calcular el total con el impuesto de TX (6.25%)", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1);
    totalizador.setPrecio(100);
    totalizador.setEstado("TX");
    expect(totalizador.getTotal()).toEqual(106.25);
  });

  it("10. debería obtener 3% de descuento para un neto de 1000", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(10);
    totalizador.setPrecio(100); // Neto = 1000
    expect(totalizador.getDescuentoPorcentaje()).toEqual(0.03);
  });

  it("10. debería calcular el total con descuento e impuesto (Neto 1000, Desc 3%, Impuesto CA 8.25%)", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(10);
    totalizador.setPrecio(100); // Neto = 1000
    totalizador.setEstado("CA");
    expect(totalizador.getTotal()).toEqual(1050.025);
   });

   it("11. debería obtener 5% de descuento para un neto de 3000", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(30);
    totalizador.setPrecio(100); // Neto = 3000
    expect(totalizador.getDescuentoPorcentaje()).toEqual(0.05);
  });

  it("12. debería obtener 10% de descuento para un neto de 10000", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1000);
    totalizador.setPrecio(7); // Neto = 7000
    expect(totalizador.getDescuentoPorcentaje()).toEqual(0.07);
  });
  
  it("13. debería obtener 10% de descuento para un neto de 10000", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(100);
    totalizador.setPrecio(100); // Neto = 10000
    expect(totalizador.getDescuentoPorcentaje()).toEqual(0.10);
  });

});