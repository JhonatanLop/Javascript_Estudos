# Condição em Javascript

## Estrutura básica

```Javascript
if (condition) {
    caso condition seja true, execute essa parte.
}
else {
    caso condition seja false, execute essa parte.
}
```

As condições podem ser feitas usando operadores lógicos.

Podem ser feitas condições apenas usando o bloco if sem o else.

### Exemplo prático

```Javascript
const numero = 10000;
if (numero > 5) {
    console.log("O número é maior do que 5");
} else {
    console.log("O número não é maior que 0");
}
```

Estamos utilizando o ```console.log()``` para exibir a mensagem<br>
Caso esteja usando o js numa page html, podeira usar o ```alert```<br>

ficaria da seguinte forma:

```html
<script>
    const numero = 69;
    if (numero > 24) {
        alert("o número é maior que 24");
    } else {
        alert("o número não é maior que 24");
    }
</script>
```

Mas fazer isso numa página html não é prático.<br>
Para pedir um input do usuário para digitar o valor da variável podemos usar a função ```prompt```<br>

```html
<script>
    const numero = prompt("digite um número")
    if (numero > 24) {
        alert("Este número é maior que 24");
    }
    else{
        alert("Este número não é maior que 24");
    }
</script>
```

Como em outras linguágens, é possível fazer uma condição dentro de outra<br>
Desse modo estarei verificando se o número é maior e é par/impar<br>

```html
<script>
    const numero = prompt("manda um númeor aí");
    // verifica se o número é maior que zero
    if (numero > 0) {
        // verifica se o resto da divizão por 2 é igual a zero
        if (numero % 2 == 0) {
            alert("o número é maior que zero e par");
        } else {
            alter("o número é maior que zero e impar");
        }
    }
    else{
    alter("O número é menor que zero")
    }
</script>
```
