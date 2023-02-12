# Manipulação de dados

## Input de dados

para salvar um input do valor de uma variável segue o comando:<br>

* Em html

```html
<script>
    var nome = prompt("qual é o seu nome?");
</script>
```

dessa forma, será aberto uma caixa de texto para input do dado

* Em javascript puro

***javascript puro não tem suporte para esse tipo de operação***

## Exibir dados

> tag's: print, printar, exibir mostrar
para fazer um "print" de um dado ou uma variável, seque o comando:<br>

* Em javascript puro

```javascript
var nome = "jhow";
console.log(nome);
```

* Em HTML usando javascript

```html
<script>
    var nome = prompt("Hello, tell me youre name"); // abrindo pop-up
    alert(nome);
</script>
```

Escrevendo dentro do documento html
```html
<script>
    var nome = prompt("digite seu nome");
    document.write(`<h2>Seu nome tem ${nome.length} letras`)
</script>
```

## Manipulação de dados

Para manipular um dado ou uma variável temos muitas possibilidades<br>
Vou começar mostrando os tipos de dados dentro do javascript<br>

* Tipos de dados:<br>

|tipo|descrição|exemplo|
|-----|----------|-------|
|String|Representa texto|"olá"|
|Number|Número inteiro ou Float|3,14 ou 69|
|BigInt|Número inteiro com grande precisão|31982347193849n|
|Boolean|Valor lógico|Verdadeiro ou Falso|
|undefined|Variavel que não foi atribuído valor|let a|
|null|Representa um valor Nulo|let a = null;|
|Symbol|Tipo de dados cujas instâncias são únicas e imutáveis|let value = Symbol('olá')|
|Objects|Pares de valores-chave de coleta de dados|let estudante = {}|

* Conversão de tipos:<br>

|Tipo inicial|Valor|Código|Saída|Função|
|------|-----|-----|------|-----|
|integer to varchar|123|variavel = variavel.toString();|varchar - "123"| Transforma de inteiro para texto|
|numeric to varchar|123.1|variavel = variavel.toString();|varchar - "123.1"| Tranforma de numerico para texto|
|varchar to integer|"123"|let variavel2 = parseInt(variave1);|integer - 123| Cria uma outra variável com tipo diferente e mesmo valor|
|varchar to float|"123.3"|let variavel2 = parseFloat(variave1);|float - 123.3| Cria uma outra variável com tipo diferente e mesmo valor|
|varchar to numeric|"123.3"|let n1 = Number(n1);|float - 123.3| Define sozinho se o tipo será inteiro ou float|

Infelizmente não tem como traduzir diretamente uma variável de tipo texto para tipo numerico<br>
É preciso criar uma variável que terá outro tipo para receber o mesmo valor<br>

* Varificar tipo do dado:<br>

```javascript
let meuNumero = "342343";
typeof(meuNumero); //String
```

> Neste caso só retornou uma String pelos número estarem entre aspas

## Operações com dados

É possível realizar operações matemáticas com variáveis.<br>
Operadores suportados no javascript:<br>

* Operadores de Comparação

> Sempre retornando `true`ou `false`

|Operador|Descrição|Exemplo|
|--------|---------|-------|
|==|Verifica a igualdade entre dois valores|2 == 2 - true|
|!=|Verifica a diferença entre dois valores|2 != 2 - false|
|===|Verifica se o tipo **E** o valor entre dois objetos são **iguais**|2 === "2" - false"|
|!==|Verifica se os valores são iguais **E** os tipos são **diferentes**|2 !== 2 - false|
|>|Verifica se o valor do lado esquero é maior que o do lado deireito|2 > 1 - true|
|<|Varifica se o valor do dalo direito é maior que o do lado esquerdo|2 < 1 - false|
|>=|Verifica se o valor do lado esquerdo é maior ou igual que o do lado direito|2 >= 2 - true>|
|<=|Verifica se o valor do lado direito é maior ou igual que o do lado esquerdo|2 <= 1 - false|

* Operadores Aritmeticos

> Usado em operações matemáticas

|Operador|Descrição|Exemplo|
|--------|---------|-------|
|+|adição|1 + 1 = 2|
|-|subtração|1 - 1 = 0|
|*|multiplicação|2 * 3 = 6|
|/|divisão|6 / 3 = 2|
|%|resto da divisão|5 % 2 = 1|
|++|incremento|++x ou x++ almentando valor de x em 1|
|--|decremento|--X ou x-- decrementando valor de x em 1|
|**|exponenciação|3** = 9|

* Operadores Lógicos

|Operador|Descrição|Exemplo|
|--------|---------|-------|
|&&|**E**: Retorna `true` se ambos os operadores forem verdadeiros, senão retorna `false`|(2==2) && (3>1) - true|
|pipes duplos|**OU**: Retorna `true`se um dos operadores forem verdadeiros, senão retorna `false`|(2>2) // (3<4) - true|
|!|**NÃO**: Retorna verdadeiro se o operando for falso, vice-e-versa (nega a informação)|!(3<2) - true|

> Sobre o exemplo número 2<br>
> `(2>2) // (3<4) - true`
> Usei duas barras para representar os pipes pois o Markdown não permite a visualização e encara isso como uma nova divisão na tabela<br>
> O certo seria `(2>2) || (3<4) - true`

* Operadores Ternários

Um operador ternário "resume" uma condição<br>
Exemplo:<br>

```javascript
    // condição ? valor1 : valor 2
    var status = (idade >= 18) ? "adulto" : "menor de idade";
```

O valor1 será aceito como valor caso o resultado da condição seja verdadeiro, senão o valor2 será aceito como valor da variável<br>

## Manipulação de Informações

> informações são um conjunto de dados que formam uma informação completa

* Concatenando dados:<br>
Para concatenar dados á um texto e formar uma frase completa o seguinte código é usado:

```html
<script>
    // forma 1 - Concatenar
    alert("Hello World, what's up " + nome);
    // forma 2 - Substituir
    alert(`Hello World, what's up ${nome}`);
</script>
```

Usando Operadores Aritmeticos e concatenação

```html
<script>
    var num1 = prompt("digite o valor 1");
    var num2 = prompt("digite o valor 2");
    var numTotal = num1 + num2;
    alert(`O valor da soma é: ${numTotal}`) 
    // o valor retornado não será uma soma de dois números
    // e sim uma concatenação de Strings
</script>
```

```html
<script>
    // convertendo diretamente para inteiro
    var num1 = parseFloat(prompt("me informe o primeiro número"));//5
    var num2 = parseFloat(prompt("me informe o segundo número"));//10
    var numTotal = num1 + num2;
    alert(`O valor da soma é: ${numTotal}`) //15
</script>
```

Na dúvida de que tipo de dado numérico será inserido, tem a função de conversão Number()

```html
<script>
    // convertendo diretamente para inteiro
    var num1 = Number(prompt("me informe o primeiro número"));//5
    var num2 = Number(prompt("me informe o segundo número"));//10
    var numTotal = num1 + num2;
    alert(`O valor da soma é: ${numTotal}`); //15
</script>
```

## Manipulação de Strings

* Interpolação

```javascript
var nome = "Jhow"
console.log("Olá " + nome + ", tudo bem com você?"); // olá jhow, tudo bem com você?
console.log(`Olá ${jhow}, tudo bem com você?`); // olá jhow, tudo bem com você?
```

Dá pra ver que são estruturas diferentes que levam á um mesmo resultado<br>
Porém, usando o método **template strings**, código fica mais organizado e compacto<br>

Método template strings

```javascript
console.log(`Olá ${variavel}, tudo bem com você?`);
```

### Formatando String

1. Tamanho da String

Existe um método chamado length dentro do javascript.<br>
> length == tamanho no português<br>
Ele permite você saber a quantidade de caracteres de uma string<br>

```javascript
var nome = "javascript";
nome.length // 10;
```

2. Formatar em letras maiúsculas/minúsculas

Existe uma função que permite você alterar os caracteres de uma string<br>

formatando em letras maiúsculas:

```javascript
var nome = "javascript";
nome.toUpperCase() // JAVASCRIPT
```

Formatando em minúsculas

```javascript
var nome = "JHONATAN WICK";;
nome.toLowerCase(); // jhonatan wick
```

## Formatação de números
> tag's: decimal, formatação, por vírgula

supondo que voçê tenha difinido um número

```javascript
var n1 = 1945.2;
```

o número decimal exibido não possui 2 casas decimais, mas podemos forçar isso

```javascript
var n1 = 1945.2;
n1.toFixed(2); // 1945.20
```
Assim conseguimos forçar duas casas decimais
> a quantidade de casa é definida dentro dos parênteses da função ```toFixed()```

Também é possível trocar o separador "." (ponto) por "," (virgula).
Usando o seguinte método:

```javascript
var n1 = 1945.2;
n1.toFixed(2).replace('.', ','); // 1945,20
```

A função ```replace()``` usa 2 parâmetros.<br>
O primeiro é o que será substituído<br>
O segundo é o que irá substituir<br>

```javascript
variavel.replace(parametro1, parametro2);
```

### Comando para formatar em moeda

```javascript
n1 = 1945.2;
// formatando no estilo de moeda brasileira
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 1,945.20
```

# Array
> tag's: lista, vetores Array

Array é um tipo de dado que consegue armazenar várias informações ao mesmo tempo<br>
Comumente conhecida como "lista", também podendo ser chamada de "vetor"<br>

Uma vantagem em usar listas é a sua capacidade de armazenar várias informações<br>

Como se representa uma lista dentro de um código javascript?

```javascript
var lista = [];
```

A lista é representada por "[]"<br>
No exemplo anterior ela está sendo inicializada vazia, mas podemos adicionar ítens separados por ","

```javascript
var lista = [
"jhonatan", // indice 0
"sebastian", // indice 1
"ellie", // indice 2
"rafaela"]; // indice 3
```

É possível acessar um iten de uma lista pelo indice<br>

```javascript
var lista = [
"jhonatan",
"sebastian",
"ellie",
"rafaela"];

lista[0]; // "jhonatan"
```

Colocando o nome da lista seguido de colchetes "[]" com o indice dentro<br>

Cada item dentro da lista corresponde à um indice com o primeiro sendo sempre 0<br>
Para saber qual é o tamanho de uma lista podemos usar o mesmo método para manipulação de String, o `length`

```javascript
var lista = ["jhonatan","sebastian","ellie","rafaela"];
lista.length; // 4
```

Usando indice, é possível alterar o dado que está armazenado na lista<br>
Por exemplo

```javascript
var lista = ["jhonatan","sebastian","ellie","rafaela"];
lista[0] = "pedro";
```

Dessa forma, o primeiro iten da lista será substituído pelo valor "pedro"<br>
Tem como adicionar itens numa lista sem precisar substituir nenhum outro usando duas funções<br>

* push

```javascript
var lista = ["valor", "valor 2", "valor 3"];
lista.push("valor 1");
//lista = ["valor", "valor 2", "valor 3", "valor 1"];
```

A função ```push()``` adiciona itens no final da lista

* unshift

```javascript
var lista = ["valor", "valor 2", "valor 3"];
lista.unshift("valor 1");
//lista = ["valor 1", "valor", "valor 2", "valor 3"];
```

A função ```unshift``` adiciona intes no começo da lista<br>
<br>
Também é possível REMOVER elementos em uma lista<br>

* pop

```javascript
lista.pop();
```

Remove o último iten da lista<br>

* shift

```javascript
lista.shift();
```

Remove o primeiro iten da lista<br>

É possível acessar todos os itens da sua lista e exibilos separadamente usando uma estrutura de repetição<br>

```javascript
var lista = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    console.log(element);
}
```

O resultado será uma sequência de 1 à 9
