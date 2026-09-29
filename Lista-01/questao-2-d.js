let numeros =; // Adicione os números dentro dos colchetes aqui!
let somaPrimos = 0;

for (let i = 0; i < numeros.length; i++) {
    let numeroAtual = numeros[i];
    
    if (numeroAtual > 1) {
        let divisores = 0;
        
        for (let j = 1; j <= numeroAtual; j++) {
            if (numeroAtual % j === 0) {
                divisores = divisores + 1;
            }
        }
        
        if (divisores === 2) {
            somaPrimos = somaPrimos + numeroAtual;
        }
    }
}

console.log("A soma dos números primos é:");
console.log(somaPrimos);
