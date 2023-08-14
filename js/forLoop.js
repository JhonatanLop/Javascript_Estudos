// sintaxe do for em JS

const cursos = ['javascript', 'python', 'vue', 'rust', 'java', 'lua']

// primeira expressão: cria um indice
// segunda expressão: enquanto indice for menor que o tamanho da lista, as iterações continuam
// terceira expressão: incremento do indice

for (let index = 0; index < cursos.length; index++) {
    console.log(cursos[index]);
}

// resultado: 
// javascript
// python
// vue
// rust
// java
// lua

// calculando média de números
const numeros = [9, 10, 6, 7, 8, 7, 3, 9, 5, 2]
let soma = 0;

for (let j = 0; j < numeros.length; j++) { soma += numeros[j] }
console.log(`a média dos números é ${soma/numeros.length}`);
// a média dos números é 6.6

// for of - outra sintaxe para o for
for (let numero of numeros){
    console.log(numero);
}
// 9
// 10
// 6
// 7

// também pode ser usado para calcular média