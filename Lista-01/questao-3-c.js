function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    return numero * calcularFatorial(numero - 1);
}
let resultadoFatorial = calcularFatorial(5);
console.log("O fatorial de 5 é:");
console.log(resultadoFatorial);
