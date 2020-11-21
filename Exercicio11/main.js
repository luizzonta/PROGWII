function fatorial() {
    var numero = document.getElementById("numero").value;
    var fatorial = 1;

    for(var i=1 ; i<=numero ; i++)
    fatorial *= i;
    document.getElementById("resultado").innerHTML = "O Fatorial de " + numero + " é: " + fatorial;

    //Com função recursiva
    document.getElementById("recursiva").innerHTML = "Função recursiva de Fatorial: " + recursiveFatorial(numero);

}

function recursiveFatorial(x){
    if (x == 0)
        return 1;
    else
        return x * recursiveFatorial(x-1);
}

