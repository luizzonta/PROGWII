##### ORIENTAÇÔES
> Siga as orientações abaixo para resolver a tarefa

###### `index.html`
 - Faça a importação do arquivo *styles.css* na tag `<head>` e do arquivo main.js na tag `<body>`.
 - Crie uma tag `<h1>` com o texto `Calcular Média do Aluno`
 - Crie 1 tag `input` para receber o nome do aluno
 - - Crie 1 tag `select` para que o usuário selecione uma das três disciplinas `[Matemática, Português, Geografia]`
 - Crie 3 tags `input` para receber números
 - Crie um botão para calcular a média do aluno

###### `styles.css`
 - Defina alguns estilos para a página
 
###### `main.js`

1. Crie uma função em JavaScript que receba as notas de um aluno do integrado e calcule a sua média final na disciplina. A função pode receber 3 argumentos, ou seja, uma nota para cada um dos trimestres, do 1° ao 3°.
- Fórmula para calcular a média final do aluno: `media = (nota1 + nota2 + nota3) / 3`

1. Crie outra função para verificar a média:
`Se a média for menor ou iglal a 4, aluno reprovado`
`Se a média for maior que 4, aluno em exame`
`Se a média for maior ou igual a 7, aluno aprovado`

3. Imprima no arquivo `index.html` a seguinte mensagem: `A média final do aluno NOME na DISCIPLINA XXXX foi MÉDIA. Aluno Aprovado|Reprovado|Em Exame.`

 > Antes de fazer os cálculos, faça validações e mostre mensagens de erro se necessário:
  - Os campos não podem ser vazios