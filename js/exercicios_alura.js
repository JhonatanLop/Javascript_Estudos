const pessoas = ["jhow", "kamila", "rodrigão", "postgres"]
const notas = [7, 10, 1, 8]

// fatiando lista com slice temporariamente
console.log(pessoas.slice(0,2))
// [ 'jhow', 'kamila', 'rodrigão', 'postgres' ]
// [ 'jhow', 'kamila' ]

// fatiando lista com splice permanentemente
const lista_numeros = [1,2,3,4,5,6,7,8,9,0]
// irá remover os elementos do indice 3 até o 5 e adicionará o número 10 no lugar
lista_numeros.splice(3,5,10)
console.log(lista_numeros);
// [ 1, 2, 3, 10, 9, 0 ]

// adiciona número no final da lista
lista_numeros.push(11)
console.log(lista_numeros)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11 ]

// concatenando listas
const salaA = ["junin", "fernanda", "marcia", "juana", "marquin"]
const salaB = ["jhow", "fernando", "xandão", "maia", "paula tejano"]

const salasConcatenadas = salaA.concat(salaB)
console.log(salasConcatenadas);
// [
//     'junin',    'fernanda',
//     'marcia',   'juana',
//     'marquin',  'jhow',
//     'fernando', 'xandão',
//     'maia',     'paula tejano'
// ]

