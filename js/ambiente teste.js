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

//    pega elemento por id e add no html

    var texto = "este é o acréscimo";
    document.getElementById("texto").innerHTML = texto;


//  loop de contagem
    // loop de contagem usando for
    var str = "";
    // iteração de 0 a 9
    for (var i = 0; i < 10; i++) {
        // adicionando o elemento à string | br quebra a linha
        str += i + "<br>";
    };
    // enviando a string ao elemento html com o id texto
    document.getElementById("texto").innerHTML = str;

    // usando while
    while (i < 10) {
        // add elemento ao texto
        str += i + "<br>";
        // alterando valor do índice
        i ++;
    };
    // enviando a string ao elemento html com o id texto
    document.getElementById("texto").innerHTML = str;


// usando break para quebrar repetição

let i = 0;
let texto = "";
for (let i = 0; i < 10; i++) {
    // se i for igual a 5, ele irá parar a contágem
    if (i === 5) {break;}
    texto += "o número é " + i + "<br>";
    console.log(i);
    // manda o texto para o elemento com id = paragrafo no documento html
    document.getElementById("paragrafo").innerHTML = texto;
}

// usando continue para manipular sequencia
let texto = "";
let i = 0;
for (let i = 0; i < 10; i++) {
    // se i for igual à 5, continue
    if (i === 5) {continue;}
    console.log(i);
    texto += "O número é: " + i + "<br>";
    document.getElementById("paragrafo").innerHTML = texto;
}

// Testando soma com concatenação de string
    var num1 = prompt("me informe o primeiro número");//5
    var num2 = prompt("me informe o segundo número");//10
    //convertendo para números inteiros
    num1 = parseInt(num1)
    num2 = parseInt(num2);
    var numTotal = num1 + num2;
    alert(`O valor da soma é: ${numTotal}`) //15


// convertendo diretamente para numerico identificando automaticamente inteiro ou float
    var num1 = Number(prompt("me informe o primeiro número"));//5
    var num2 = Number(prompt("me informe o segundo número"));//10
    var numTotal = num1 + num2;
    alert(`O valor da soma é: ${numTotal}`) //15

// formatação de strings
    var nome = "Jhow"
    console.log("Olá " + nome + ", tudo bem com você?"); // olá jhow, tudo bem com você?
    console.log(`Olá ${jhow}, tudo bem com você?`); // olá jhow, tudo bem com você?

// usando length
    var nome = "javascript";
    nome.length // 10;

// teste com upper e lower case
    var nome = "javascript";
    nome.toUpperCase() // JAVASCRIPT

    var nome = "JHONATAN WICK";;
    nome.toLowerCase(); // jhonatan wick

// escrevendo no documento html
    var nome = prompt("digite seu nome");
    document.write(`<h2>Seu nome tem ${nome.length} letras`);

// formatação de números
    var n1 = 1945.2;
    n1.toFixed(2).replace('.', ','); // 1945,20
