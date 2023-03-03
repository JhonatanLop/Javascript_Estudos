# DOM
> seguindo o código html do arquivo "DOM.html"

## Oque é DOM?

DOM é um conjunto de objetos dentro do navegado que dá acesso aos componentes internos do website

## Arvore DOM

Tudo dentro do javascript está dentro de um objeto chamado ```window```<br>
A janela do seu navegador é um objeto DOM, sendo ela a Raiz<br>

Dentro do objeto ```window``` existem outros objetos. os principais são

1. location
    - que é responsável por dar as informações do site. como URL, pagina atual e pagina anterior
2. document
    - é o documento que está sendo usado
3. history
    - é responsável por guardar seu histórico de nagevação

Dentro de ```document``` existe o objeto ```html``` que é o código html do site<br>
E dentro de ```html```, existem mais dois objetos que são "filhos" do ```html```<br>
São eles ```head``` e ```body```.<br>
Os mesmos também possuem objetos dentro, chamado de "chield" (tradução de filho)<br>
Logo, ```html``` é ```parent``` de ```head``` e ```body```<br>
```body``` e ```head``` também possuem objetos dentro deles. ```head``` possui as tags `meta` e `title`.<br>
```html``` possui `h1`, `p`, `p` e `div`<br>

Um exemplo de comando em js que utiliza os componentes DOM...

```javascript
window.document.write("Hello World");
```

Este código escreve "Hello World" dentro do document html<br>
É possível também imprimir a url do site através do DOM<br>

```javascript
window.document.write(window.document.URL);
```

Utilizando DOM, é possível navegar entre os elementos da página html<br>
Existem cinco formas de acessar um elemento html utilizando DOM:<br>

1. por Tag
2. por ID
3. por Nome
4. por Classe
5. por Seletor

### Como selecionar?

- Por Tag:

    ```javascript
    getElementByTagName();
    // ou
    var p1 = window.document.getElementByTagName('p')[0];
    // escreve no html o valor da variável "p1"
    window.document.write(p1.innerText);
    ```

    Esse código cria uma variável ```p1``` e atribui ela o valor do PRIMEIRO elemento com a tag 'p', ou seja, um parágrafo.<br>
    Dentro de ```[]``` é definido o elemento a ser settado em ordem de aparição no documento. como este está em '0', o <br>
    valor de p1 será o texto do primeir parágrafo

- Por ID:

    ```javascript
    getElementById("id do componente html");
    // neste caso o "window" foi ocultado
    var t1 = document.getElementById("msg");
    // transforma fundo do elemento com id "msg" em verde
    t1.style.background = "green";
    ```

- Por Nome:

    ```javascript
    getElementByName("nome do componente html");
    var d = document.getElementByName("click")[0];
    d.innerText("Olá")
    ```

- Por Classe:

    ```javascript
    getElementByClasseName("classe do componente html");
    var d = document.getElementsByClassName("classe")[0];
    d.innerText("Olá")
    ```

- Por seletor

    ```javascript
    querySelector()
    querySelectorAll()
    ```

    esta busca usando elementos do css

    ```javascript
    // se for buscar usando id, usar #; se for buscar usando classe, usar .
    var q = document.querySelector('p#msg')
    q.style.color = 'black';

## Eventos DOM

> segundo o arquivo "DOM2.html"

No arquivo ```DOM1.html``` foi feita uma página simples com um uma div de cor azulada.<br>
Nela, serão testados alguns eventos com mouse e funções javascript<br>

Os eventos podem ser configurados na parte html ou diretamente no javascript<br>
Aqui, serão demonstradas as duas formas<br>

- html

para disparar um evento de click com mouse dentro do html, basta adicionar o evento dentro da div

```html
<div id="area" onclick="nomeDaFunction()">
```

num exemplo prático

```html
<!-- adiciona evento ao clicar -->
<div id="area" onclick="clicar()">
        interaja...
</div>

<script>
    function clicar(){
        // atribui a variável area o elemento pelo id
        var a = document.getElementById('area');
        // muda o texto da div
        a.innerText = 'Clicou!';
    }
</script>
```

Adicionando um evendo para quando o mouse entrar e sair na area da div<br>

```html
<div id="area" onclick="clicar()" onmouseenter="entrar()" onmouseleave="sair()">
    interaja...
</div>

<script>
    // deixando a variável global para poder usar em outras funções
    var a = document.getElementById('area');

    function clicar(){
        a.innerText = 'Clicou!';
        a.style.b= 'green';
    }
    function entrar(){
        a.innerText = 'Entrou!';
    }
    function sair(){
        a.innerText = 'Saiu!';
    }
</script>
´´´

Uma forma de adicionar esses eventos fora do html, para deixar o código mais limpo<br>
é adicionando diretamente no javascript<br>

```html
<body>  
    <div id="area">
        interaja...
    </div>

    <script>
        var a = document.getElementById('area');
        // cadastrando eventos
        a.addEventListener('click', clicar);
        a.addEventListener('mouseenter', entrar);
        a.addEventListener('mouseout', sair);

        function clicar(){
            a.innerText = 'Clicou!';
            a.style.backgroundColor = 'green';
        }
        function entrar(){
            a.innerText = 'Entrou!';
            a.style.backgroundColor = 'yallow';
        }
        function sair(){
            a.innerText = 'Saiu!';
            a.style.backgroundColor = '#169d9d';
        }
    </script>
</body>
```

## Fazendo um calculo simples
> seguindo o arquivo Soma.html

```html
<body>
    <!-- definindo os inputs -->
    <input type="numer" name="numero1" id="n1"> +
    <input type="numer" name="numero2" id="n2">
    <!-- definindo o botão com o evento onclick -->
    <button onclick="somar()">Somar</button>
    <div id="rest">Resultado</div>
    <script>
        // criando função.. é importante lembrar que toda a operação deva estar dentro da função
        function somar(numero1, numero2){
            // importando
            var n1 = document.getElementById("n1");
            var n2 = document.querySelector("input#n2");
            var result = document.getElementById("rest");
            // convertendo
            var numero1 = Number(n1.value);
            var numero2 = Number(n2.value);
            // fazendo o calculo
            var resultado = numero1 + numero2;
            // transferindo o resultado para o html
            result.innerHTML = `A soma entre ${numero1} e ${numero2} é de: ${resultado}`;
        }
    </script>
</body>
```