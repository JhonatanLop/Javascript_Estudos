const numeros = [5.6, 8.8, 7.8, 5.0, 2.2, 2.6, 4.1, 8.2, 4.5, 5.0]

// lendo todos os números com for
// for (let numero of numeros){
//     console.log(numero);
// }
// resultado:
// 5.6
// 8.8
// 7.8
// 5
// 2.2
// 2.6
// 4.1
// 8.2
// 4.5
// 5

// lendo for de trás para frente
// for (let index = numeros.length - 1; index > -1; index--) {
//     console.log(numeros[index]);
// }
// resultado
// 5
// 4.5
// 8.2
// 4.1
// 2.6
// 2.2
// 5
// 7.8
// 8.8
// 5.6

// identificando o maior número:
var maiorNum = numeros[0]
for (let i=0; i < numeros.length; i++){ 
    if (maiorNum < numeros[i]) { 
        maiorNum = numeros[i] 
    } 
}
console.log(`O maior número é ${maiorNum}`);
// resultado:
// O maior número é 8.8

// identificando o menor número:
var maiorNum = numeros[0]
for (let i=0; i < numeros.length; i++){ 
    if (maiorNum > numeros[i]) { 
        maiorNum = numeros[i] 
    } 
}
console.log(`O menor número é ${maiorNum}`);
// resultado:
// O menor número é 2.2
