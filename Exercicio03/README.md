##### ORIENTAÇÔES
> Siga as orientações abaixo para resolver a tarefa

###### `index.html`
 - Faça a importação do arquivo styles.css na tag `<head>` e do arquivo main.js na tag `<body>`.
 - Crie uma tag `<h1>` com o texto `Calculadora`

###### `styles.css`
 - Defina uma cor para o texto para da tag `h1`
 - Defina uma cor para o fundo na tag `body`
 
###### `main.js`
> Agora, os dados serão impressos no arquivo `index.html` e **NÃO** no `console.log()`

1. No arquivo `index.html`, crie duas tags `input` para que o usuário possa informar dois números (pode ser com ponto flutuante), e um `botão`
2. No arquivo `main.js`, crie uma função que vai capturar a ação de `click` do botão.
3. Ao clicar no botão, você precisa capturar os dados digitados pelo usuário, calcular a soma, subtração, multiplicação, divisão e o resto da divisão.
4. Imprima os resultados na tag `div.resultados` no arquivo `index.html`.

 > Antes de fazer os cálculos, faça validações e mostre mensagens de erro se necessário:
  - Os campos não podem ser vazios e precisam ser números
  - O primeiro número não pode ser `zero`