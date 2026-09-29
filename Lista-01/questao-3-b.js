function calcularProdutorio() {
    let resultado = 1;
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado * arguments[i];
    }
    console.log("O produtório dos números é:");
    console.log(resultado);
}
calcularProdutorio(2, 3, 4);
