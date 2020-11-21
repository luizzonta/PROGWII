function array() {

    const alunos = ['Roberto', 'Denilson', 'Carlos']

    alunos.sort();   
    document.getElementById("arrayOrdenado").innerHTML = "Array ordenado: " + alunos;
    
    alunos.push('Luiz');
    document.getElementById("arrayNovoElemento").innerHTML = "Array novo elemento: " + alunos;

    document.getElementById("arrayTamanho").innerHTML = "Tamanho do Array: " + alunos.length;

    document.getElementById("arraySegundoElemento").innerHTML = "Segundo elemento do Array: " + alunos[1];

    //For
    var text = "</ul>";
    for (i = 0; i < alunos.length; i++) {
        text = text + "<li>" + (parseInt(i)+parseInt(1)) + "º elemento do Array: " + alunos[i] + "</li>";
    }
    document.getElementById("arrayElementoFor").innerHTML = text;

    //Map    
    var elementos = alunos.map(alunoslunos => alunoslunos.toUpperCase());
    document.getElementById("arrayElementoMap").innerHTML = "Nomes em caixa alta: " + elementos;

    //função slice
    const novoArrayAlunos = alunos;
    novoArrayAlunos.splice(0, 1);
    novoArrayAlunos.splice(2, 1);

    var text = "</ul> Novo array terá apenas o segundo e o terceiro elemento";
    for (i = 0; i < novoArrayAlunos.length; i++) {
        text = text + "<li>" + (parseInt(i)+parseInt(1)) + "º elemento do Array: " + novoArrayAlunos[i] + "</li>";
    }
    document.getElementById("arrayElementoNovo").innerHTML = text;

}

