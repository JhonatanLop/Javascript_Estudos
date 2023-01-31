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

A ***expressão inicial*** é onde será definido o índice/contador<br>
***Condição*** é até onde a repetição deve ocorrer<br>
***Incremento*** é onde o indice/contador será incrementado<br>

### Exemplo de repetição de índice

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