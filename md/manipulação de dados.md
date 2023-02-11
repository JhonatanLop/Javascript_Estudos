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

para fazer um "print" de um dado ou uma variável, seque o comando:<br>

* Em javascript puro

```javascript
var nome = "jhow";
console.log(nome);
```

* Em HTML usando javascript

```html
<script>
    var nome = prompt("Hello, tell me youre name");
    alert(nome);
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
|%|resto da divisão|5 % 2 = 2.5|
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
    alert(`O valor da soma é: ${numTotal}`) //15
</script>
```

* Manipulação de Strings
