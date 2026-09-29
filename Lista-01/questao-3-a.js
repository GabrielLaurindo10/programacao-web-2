function calcular(num1, num2, operacao) {
    if (operacao === "+") {
        console.log(num1 + num2);
    } else if (operacao === "-") {
        console.log(num1 - num2);
    } else if (operacao === "*") {
        console.log(num1 * num2);
    } else if (operacao === "/") {
        console.log(num1 / num2);
    } else {
        console.log("Operação inválida");
    }
}
console.log("Resultado da soma de 10 + 5:");
calcular(10, 5, "+");
