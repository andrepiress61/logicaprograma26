let numeroSorteado = 0;

while (numeroSorteado !== 7) {
    numeroSorteado = Math.floor(Math.random() * 10) + 1;
    console.log("Número sorteado: " + numeroSorteado);
}

console.log();

//funções
function soma(a, b) {
    return a + b;
};

console.log("Soma: " + soma(5, 3));
console.log("subtração: " + (10 - 4));  

//arrow function
const multiplicacao = (a, b) => {
    return a * b;
}

switch (operacao){
    case '+':
        console.log(soma(10.5))
        break
    case '-':
        console.log(subtracao(10,3))
        break
    case '*':
        console.log(multiplicacao(3, 5))
        break
    default:
        console.log('Operação Invalida')
}