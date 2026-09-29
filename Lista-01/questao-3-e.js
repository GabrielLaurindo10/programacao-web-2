function calcularTotal(valorUnitario, quantidade, desconto = 0) {
    let valorBruto = valorUnitario * quantidade;
    let valorFinal = valorBruto - desconto;
    
    console.log("O valor total da compra é:");
    console.log(valorFinal);
}
console.log("Teste com desconto:");
calcularTotal(10, 3, 5); 
console.log("Teste sem desconto:");
calcularTotal(10, 3); 
