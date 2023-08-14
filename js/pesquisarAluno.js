const alunos = ['jhow', 'nicolle', 'hector', 'isaac', 'gustavo']
const medias = [7, 10, 5, 8, 6]

const listaDeAlunosEMedias = [alunos, medias]

function exibirNome(aluno) {
    // verifica se o item existe na lista
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        // criando duas listas que vão receber os valores de outras listas
        const [alunos, medias] = listaDeAlunosEMedias

        // busca informação na lista e atribui o index na constante
        const indice = listaDeAlunosEMedias[0].indexOf(aluno)

        console.log(`O(a) ${aluno}, está cadastrado!\nA média é de: ${listaDeAlunosEMedias[1][indice]}`);
    } else {
        console.log('o aluno não existe no db');
    }
}

exibirNome('jhow')

// indexOf - retorna o indice do item na lista
// includes - retorna um booleano ao verificar se um valor existe na lista