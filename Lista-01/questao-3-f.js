let contaBancaria = {
    numeroDaConta: "12345-6",
    saldo: 500.0,

    depositar: function(valor) {
        this.saldo = this.saldo + valor;
        console.log("Depósito realizado com sucesso!");
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            console.log("Saque realizado com sucesso!");
        } else {
            console.log("Saldo insuficiente para o saque.");
        }
    },
    informarSaldo: function() {
        console.log("Número da Conta:");
        console.log(this.numeroDaConta);
        console.log("Saldo Atual (R$):");
        console.log(this.saldo);
    }
};
contaBancaria.informarSaldo(); 
contaBancaria.depositar(200); 
contaBancaria.sacar(100);    
contaBancaria.informarSaldo(); 
