const select = document.querySelector('select');
const paragrafo = document.querySelector('p');
select.onchange = setOpcao;

function setOpcao() {
    // pega o valor escolhido no select
    const escolha = select.value;
    switch (escolha) {
        case 'valor 1':
            paragrafo.textContent = 'você escolheu a opção um';
            break;
        case 'valor 2':
            paragrafo.textContent = 'você escolheu a opção 2';
            break;
        case 'valor 3':
            paragrafo.textContent = 'você escolheu a opção 3';
            break;
        default:
            paragrafo.textContent = 'indefinido';
            break;
    }
}
