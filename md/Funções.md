# Funções

Uma função é um módulo, pois é responsável por resolver apenas um problema específico<br>
Uma função possui um nome, e cada função gera um resultado<br>

* Encapsulamento

> No Encapsulamento a função apenas expões a sua interface e oculta seu processamento]<br>
> Dessa forma podemos usar uma função através de seu nome sem ter que se preocupar em como ela faz o processamento<br>

A "interface" da função é onde acontece o input de dados, onde ela vai receber os dados para processamento, damos a eles o nome de parâmetros ou argumentos<br>
O output é a saída da função, os dados que ela vai retornar depois do processamento<br>

## Vantagens em usar Funções

Além de deixar o código mais organizado, oque facilita manutenção.<br>
Evita repetições dentro do código, deixando ele mais limpo<br>
Também existe uma segurança maior, porque se a função existe, ela foi testada e funciona (ou deveria funcionar)<br>

## Como criar uma função?

Para criar uma função em javascript, usa-se a palavra reservada ```function```, a segui os parâmetros que ela irá usar no processamento será passados dentre "()" (parenteses)<br>

```javascript
function name(params) {
    instrução
}
```

Em ```nome```, é escolhido um nome para a função, e ela será executada sempre que esse nome for citado com os parâmetros definidos<br>

Criando uma função que eleva número ao quadrado<br>

```javascript
function elevarAoQuadrado(numero1) {
    return numero1 = numero1 ** 2;
}
```

O método ```return``` retorna alguma coisa dentro de uma função. Normalmente o valor de saída<br>