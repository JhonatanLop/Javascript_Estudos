# Switch Case

Switch case é uma outra forma de condicional, onde voçê descreve todos os casos e tudo oque irá acontecer<br>
Sua estrutura é bem simples.

```javascript
switch (variavel) {
    case "valor1":
        // código a ser executado caso variável seja igual "valor1"
        break;
    case "valor2":
        // código a ser executado caso variável seja igual "valor2"
    default:
        // código a ser executado caso não tenha passado em nenhum outro teste.
        break;
}
```

Vale lembrar que não é possível fazer uma condição no lugar de "variavel1" ou "variavel2"<br>
Seria mais recomendável usar um bloco de condição IF<br>

Você pode usar quantos "cases" quiser<br>
O ideal de usar isso em conjunto com uma página html é quando a página possui um combobox<br>
Dessa forma é mais fácil de prever os casos e definir qual a atitude do sistema em relação à isso.

```html
<label> Escolha uma opção </label>
<!-- definindo as opções -->
<select id = "opcao">
    <option value="valor 1"> valor 1 </option>
    <option value="valor 2"> valor 2 </option>
    <option value="valor 3"> valor 3 </option>
</select>

<!-- parágrafo que vai receber o texto -->
<p></p>

<!-- parte do javascript -->
<script>
    // querySelector() busca o objeto html dentro do documento. nesse caso buscando o select
    // definie a constante como o select
    const select = document.querySelector('select');
    // é responsável por atribuir o texto ao parágrafo
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

</script>
```

## Oque esse código faz? <br>

É exibido um combobox com 3 opções de escolha, estas opções estão descritas dentro do switch case<br>
Ao escolher qualquer uma das opções, um parágrafo será preenchido com o texto descrito nas condições do Switch case<br>

* Parte responsável pelas opções (combobox)<br>

```html
   <select id = "opcao">
       <option value="valor 1"> valor 1 </option>
       <option value="valor 2"> valor 2 </option>
       <option value="valor 3"> valor 3 </option>
   </select>
```

cada option representa uma opção<br>

* Declaração das constantes

```javascript
const select = document.querySelector('select');
const paragrafo = document.querySelector('p');
// quando for alterado, função "setOpcao" será executada
select.onchange = setOpcao;
```

a constante select, irá receber o valor do primeiro select encontrado no documento html, portanto, uma lista<br>
a constante paragrafo, irá receber o valor do primeiro parágrafo que encontrar dentro do documento html<br>

* Função responsável pela atribuição do parágrafo

```javascript
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
```

a constante "escolha" pega o valor do select e o switch à usa como parâmetro
o código ```paragrafo.textContent = ''``` faz com que o primeiro paragrafo dentro do documento html receba o texto dentro dos parênteses
