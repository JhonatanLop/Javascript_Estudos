const alunos = ["jhow", "kamila", "rodrigão", "postgres"]
const notas = [7, 10, 1, 8]

const listaDeAlunosEMedias = [alunos, notas]

console.log(listaDeAlunosEMedias);
// [ [ 'jhow', 'kamila', 'rodrigão', 'postgres' ], [ 7, 10, 1, 8 ] ]

// acessando valor 1 da primeira lista
console.log(`o primeiro aluno da lista de alunos é o(a) ${listaDeAlunosEMedias[0][0]} e a nota delo é ${listaDeAlunosEMedias[1][0]}`)
// o primeiro aluno da lista de alunos é o(a) jhow e a nota delo é 7