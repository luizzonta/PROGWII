##### ORIENTAÇÔES
> Siga as orientações abaixo para resolver a tarefa

###### `index.html`
 - Faça a importação do arquivo styles.css na tag `<head>` e do arquivo main.js na tag `<body>`.
 - Crie uma tag `<h1>` com o texto `Quiz`

###### `styles.css`
 - Defina alguns estilos para a página
 
###### `main.js`

Esta tarefa está minimamente pronta. Você precisa:
* acessar o arquivo `main.js (linha 30)` e adicionar pelo menos mais 3 questões com alternativas.
>Após isso, faça as seguintes modificações:
* Utilize a função `embaralharArray` para embaralhar as alternativas toda vez que a questão for carregada



```
function embaralharArray(meuArray) {
  for (
    var j, x, i = meuArray.length;
    i;
    j = Math.floor(Math.random() * i),
      x = meuArray[--i],
      meuArray[i] = meuArray[j],
      meuArray[j] = x
  );
  return meuArray;
}
```