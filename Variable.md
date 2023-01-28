# Variáveis em Javascript

## Como criar uma variável?

Atualmente, existem 3 formas de declarar uma variável em javascript.<br>
<br>
Usando:

1. var.

> Criando uma variável e definindo o valor como 42

```javascript
var x = 42
```

A variável pode ser usada em qualquer ponto dentro da função em que foi declarada, mas não pode ser usada fora da função.

```javascript
function Ola() {
    //variável pode ser usada aqui
    var a = ="oi";
    console.log(a);
}
```

Utilizando "var" para declarar a variável, é possível utilizar a variavel **dentro da função** antes mesmo de ser declarada<br>
Exemplo:

```javascript
meuNome = 'Jhow';
function logName() {
    console.log(meuNome);
}
logName();
var meuNome;
```

Isso é chamado de *Hoisting* e permite que uma variável seja declarada em qualquer parte do código.<br>

##

2. let.

<p>Let cria uma variável com Escopo de bloco.<br>
Exemplo:</p>

```javascript
// a variável a não pode ser usada aqui
function Ola() {
    let a = "Hello";
    // a variável b não pode ser usada aqui.
    if (a == "Hello") {
        led b = "World";
        console.log(a+""+b);
    }
    // a variável b não pode ser usada aqui
    console.log(a + "" + b); //Erro
}
```

Usando este exemplo, vamos analizar.<br>
A variáve ***a*** possui escopo de função. Já a variavel ***b*** possui escopo de condição.<br>
> Enquanto ***a*** pode sar usado em qualquer lugar da função, ***b*** só pode ser usado dentro do if (coondicional).

##

3.Usando uma atribuição de valor.

Essa é uma forma direta de declarar uma variável em javascript.
Fazendo isso dessa forma, ela se torna uma variável global e pode ser usada em qualquer lugar do código

```javascript
x = 21
```

## Algumas regras para declarar variáveis

* Em primeiro lugar, o nome da variável deve começar com uma letra

> 1. nome - Correto
> 2. 13salario - Incorreto
> 3. n0m3 - Correto
> todos outros caracteres, com execção do primeiro, podem ser números

* É possível usar letras maiúsculas na hora de declarar uma variavel. mas preste atenção

> 1. minhaidade != minhaIdade
javascript é uma linguágem casesensitive. isso é, sensível a letras maiúsculase minúsculas.<br>

## Boas práticas

* Reduza o uso de variáveis globais.<br>

> isso reduz significativamente a chance de problemas.<br>

* Não faça uso do Hoisting.<br>

> isso pode acabar confundindo. Sempre declare suas variáveis no início do seu código.<br>

* Use lower camel case para nomear as variáveis. (nomeDaPessoa).<br>

* Utilize nomes auto explicativos para variáveis e funções.<br>

# Constantes

Constantes são o tipo de dados que uma vez declarada, não pode mais ser alterada.

```javascript
const diasDaSemana = 7;
```

<p> por javascript ser uma linguágem dinâminca, não é necessário declarar o tipo da variável ou constantes </p>

## Tipos de dados em javascript

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

## Como verificar o tipo de uma variável?

Existe uma função nativa do javascript chamada typeof.<br>
Exemplo><br>

```javascript
let meuNumero = "342343";
typeof(meuNumero); //String
```

O tipo de dado armazenado na variável é retornado como String.  