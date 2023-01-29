// combobox retorna um texto dentro de um parágrafo no documento html
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


// retorna um titulo como Hello World mais o texto digitado
    const title = document.querySelector("h1");
    var nome = prompt("me descreva teu nome fi de rapariga");
    alert("É um prazer ter você aqui conosco novamente, " + nome);
    // vai receber o texto e concatenar com o nome no final
    title.textContent= "Hello world, " + nome;

// faz a conversão de tipo de variável e soma os inputs
    var n1 = prompt("me informe o primeiro número");
    // convertendo para inteiro
    var n1 = parseInt(n1);
    // fazendo conversão direta no input
    var n2 = parseInt(prompt("me informe o segundo número"));
    var resultado = n1 + n2;

    alert("o resultado é " + resultado);