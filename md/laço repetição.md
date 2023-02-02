# Estruturas de repetição

Existem algumas maneiras de construir uma estrutura de repetição<br>

* for
* while
* do while

## Estrutura do for

```javascript
for (expressão inicial; condição; incremento) {    
}
// isto é
    // indice = 0; enquanto indice < algo; indice += 1
for (let index = 0; index < array.length; index++) {
}
```

A ***expressão inicial*** é onde será definido o indice/contador<br>
***Condição*** é até onde a repetição deve ocorrer<br>
***Incremento*** é onde o indice/contador será incrementado<br>

### Exemplo de repetição de indice

```javascript
for (let index = 0; index < 5; index++) {
    console.log(index);
}
```

o resultado será uma contagem de 0 a 4, pois i começa em 0 e a repetição acaba quando chegar a o maior número da sequência (menor que 5)


## Estrutura do while

```javascript
while (condição) {
    código a ser executado
}
```

***Condição*** é oque deve ocorrer para haver repetição
Enquanto a Condição for verdadeira, o código dentro de chaves ``` { } ``` será executado<br>

Seguindo o mesmo exemplo do for...

```javascript
let i = 0
while (i < 5) {
    console.log(i);
    i ++;
}
```

Isso mostrará novamente a sequência de 0 a 4


## Estrutura ***do while***

É parecisa com a do while com uma regra a mais

```javascript
do {
    código
} while (Condição);
```

Usando ***do while***, o Código aparece antes da instução. Com isso, o código descrito será executado uma vez 
(sem verificar a condição), depois, caso a condição seja verdadeira, o código continuará sendo executado

Seguindo os mesmos exemplos anteriores

```javascript
let i = 0;
do {
    console.log(i);
    i ++;
} while (i < 5);
```

Novamente, o resultado a ser exibido é uma sequência de 0 a 4

## Break

***Break*** pode ser usado para quebrar uma repetição caso você queira<br>
Exemplo<br>

```javascript
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
```

Dessa forma a contagem chegará até 5, pois o indice deve variar de 0 até 10<br>
Mas foi usada uma condição para que caso o indice seja 5, pare a contagem

> No exemplo a cima estou usando "===". Diferente de "==" aonde apenas é verificado se o valor é igual<br>
> com "===" estou verificando se o valor e tipo são iguais

## Continue

***Continue*** é um comando do javascript, assim como break, para manipular repetições<br>
Continue pode ser usado para pular ou ignorar uma instrução<br>
Exemplo<br>

```javascript
let texto = "";
let i = 0;
for (let i = 0; i < 10; i++) {
    // se i for igual à 5, continue
    if (i === 5) {continue;}
    console.log(i);
    texto += "O número é: " + i + "<br>";
}
```

Dessa forma, quando a repetição chegar a 5, todo o resto da repetição será ignorada<br>
>Isso resultara numa sequência de 1.. 2.. 3.. 4.. 6.. 7.. 8.. 9. Pois ao chegar no 5, o resto do código foi ignorado
