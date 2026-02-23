// console.log("Ola Mundo");

// //variaveis
// var  nome = "joao";
// let idade = 309;
// const PI = 3.14;

// console.log(nome);
// console.log(idade);
// console.log(PI);

// let a = 10;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// console.log(a ** b );

// console.log(a>b)

// function calculadora(num1, num2, operacao) {
//     if (operacao === "+") {
//         return num1 + num2;
//     } else if (operacao === "-") {
//         return num1 - num2;
//     } else if (operacao === "*") {
//         return num1 * num2;
//     } else if (operacao === "/") {
//         if (num2 === 0) {
//             return "Erro: divisão por zero";
//         }
//         return num1 / num2;
//     } else {
//         return "Operação inválida";
//     }
// }

// // exemplos de uso
// console.log(calculadora(10, 5, "+")); 
// console.log(calculadora(10, 5, "-")); 
// console.log(calculadora(10, 5, "*")); 
// console.log(calculadora(10, 5, "/")); 

// let x = true;
// let y = false; 

// console.log(x && y );
// console.log(x || y);
// console.log(!x);

// nome = "Maria";
// idade = 24;

// console.log("nome" + nome, "Idade:" + idade);

// for (let i = 0; i < 5; i++) {
//     console.log("Contagem: " + i);
// }

// //arrays
// let frutas = ["maçã", "banana", "laranja"];
// console.log(frutas[0]);
// console.log(frutas.length);

// let pessoa = {
//     nome: "João",
//     idade: 30,
//     cidade: "São Paulo"
// };

//imc 
// function calcularIMC(peso, altura) {
//     if (altura <= 0) {
//         return "Erro: altura deve ser maior que zero";
//     } else {
//         return peso / (altura * altura);
//     }
// }

// exemplo de uso
// console.log(calcularIMC(70, 1.75));

// let peso = 75;
// let altura = 176;

// let CalculaIMc = peso / (altura * altura);
// console.log(CalculaIMc)

/*
Você é o desenvlvedor da SenaiSystem,
e precisa criar um sistema de controle de estacionaemnto.

Regras: 
1- O estacionamento tem capacidade para 10 carros.
2-  A diária do estacionamento é de R$ 20,00.
3- Se o cliente ficar maid de 3 hrs, paga a diária completa.
4- Se ficar até as 3 hrs:
     - R$ 8,00 por hora
5- Se o cliente for VIP, ganha 20% de desconto no valor final.

Crie um programa que:
- Receba:
   - Nome do cliente
   - Quantidade de horas estacionado
   - Se é VIP ou não
   - Calcule o valor a pagar
- Mostre no console:
   - Nome do cliente
   - Valor a pagar com desconto (se for VIP)

O VALOR DEVE ESTAR FORMATADO COM DUAS CASAS DECIMAIS 
E O SINAL DE REAL ANTES DO VALOR
*/

let quantidade = {
  nome: "Andre",
  horas: 4,
  vip: "sim"
}
let valor;


if (horas > 3) {
    valor = 20;
} else {
    valor = horas * 8;
}


if (vip == "sim") {
    valor = valor - (valor * 0.2);
}


console.log("Cliente: " + nome);
console.log("Valor a pagar: R$ " + valor.toFixed(2));

