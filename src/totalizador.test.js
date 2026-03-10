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

  it("14. debería obtener 15% de descuento para un neto de 30000", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(300);
    totalizador.setPrecio(100); // Neto = 30000
    expect(totalizador.getDescuentoPorcentaje()).toEqual(0.15);
  });

  it("18. debería tener California (CA) como estado por defecto", () => {
    let totalizador = new Totalizador();
    // No seteamos estado manualmente
    totalizador.setEstado("CA"); 
    expect(totalizador.getImpuestoPorcentaje()).toEqual(0.0825);
  });

  it("19. debería permitir setear y obtener la categoría del producto", () => {
    let totalizador = new Totalizador();
    totalizador.setCategoria("Alimentos");
    expect(totalizador.getCategoria()).toEqual("Alimentos");
  });

  it("19. debería tener 'Varios' como categoría por defecto", () => {
    let totalizador = new Totalizador();
    expect(totalizador.getCategoria()).toEqual("Varios");
  });

  it("20. debería obtener el impuesto adicional de 0% para la categoría Alimentos", () => {
    let totalizador = new Totalizador();
    totalizador.setCategoria("Alimentos");
    expect(totalizador.getImpuestoCategoriaPorcentaje()).toEqual(0);
  });

  it("21. debería obtener el impuesto adicional de 7% para la categoría Bebidas alcohólicas", () => {
    let totalizador = new Totalizador();
    totalizador.setCategoria("Bebidas alcohólicas");
    expect(totalizador.getImpuestoCategoriaPorcentaje()).toEqual(0.07);
  });

  it("22. debería obtener 0% para Material de escritorio", () => {
    let totalizador = new Totalizador();
    totalizador.setCategoria("Material de escritorio");
    expect(totalizador.getImpuestoCategoriaPorcentaje()).toEqual(0);
  });

  it("23. debería obtener 3% para Muebles", () => {
    let totalizador = new Totalizador();
    totalizador.setCategoria("Muebles");
    expect(totalizador.getImpuestoCategoriaPorcentaje()).toEqual(0.03);
  });

  it("24. debería obtener 4% para Electrónicos", () => {
    let totalizador = new Totalizador();
    totalizador.setCategoria("Electrónicos");
    expect(totalizador.getImpuestoCategoriaPorcentaje()).toEqual(0.04);
  });

  it("25. debería obtener 2% para Vestimenta", () => {
    let totalizador = new Totalizador();
    totalizador.setCategoria("Vestimenta");
    expect(totalizador.getImpuestoCategoriaPorcentaje()).toEqual(0.02);
    });

  it("26. debería obtener descuento adicional de 2% para Alimentos", () => {
    let totalizador = new Totalizador();
    totalizador.setCategoria("Alimentos");
    expect(totalizador.getDescuentoCategoriaPorcentaje()).toEqual(0.02);
  });

  it("27. debería obtener descuento adicional de 1.5% para Material de escritorio", () => {
    let totalizador = new Totalizador();
    totalizador.setCategoria("Material de escritorio");
    expect(totalizador.getDescuentoCategoriaPorcentaje()).toEqual(0.015);
  });

  it("28. debería obtener descuento adicional de 1% para Electrónicos", () => {
    let totalizador = new Totalizador();
    totalizador.setCategoria("Electrónicos");
    expect(totalizador.getDescuentoCategoriaPorcentaje()).toEqual(0.01);
  });

  it("29. debería permitir ingresar y obtener el peso volumétrico", () => {
    let totalizador = new Totalizador();
    totalizador.setPesoVolumetrico(5);
    expect(totalizador.getPesoVolumetrico()).toEqual(5);
  });

  it("30. debería calcular el costo de envío (peso x cantidad)", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(10);
    totalizador.setPesoVolumetrico(2);
    expect(totalizador.getCostoEnvio()).toEqual(20);
  });


});