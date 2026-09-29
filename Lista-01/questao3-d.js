function buscarImpares(listaDeNumeros) {
    let apenasImpares = [];
    for (let i = 0; i < listaDeNumeros.length; i++) 
        if (listaDeNumeros[i] % 2 !== 0) {
            apenasImpares.push(listaDeNumeros[i]);
        }
    }
    console.log("Números ímpares encontrados:");
    console.log(apenasImpares);
}
let meusNumeros =;
buscarImpares(meusNumeros);
