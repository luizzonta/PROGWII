function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (num1 == "" || num2 == ""){
        alert("Os campos não podem ser vazios e precisam ser números");
    }else if (num1 <= 0){
        alert("Campo do primeiro número não pode ser zero");
    }else{
    
        var soma = parseInt(num1) + parseInt(num2);
        var sub = parseInt(num1) - parseInt(num2);
        var mul = parseInt(num1) * parseInt(num2);
        var div = parseInt(num1) / parseInt(num2);
        var resto = parseInt(num1) % parseInt(num2);

        document.getElementById("soma").innerHTML = "Soma: " + soma;
        document.getElementById("sub").innerHTML = "Subtação: " + sub;
        document.getElementById("mul").innerHTML = "Multiplicação: " + mul;
        document.getElementById("div").innerHTML = "Divisão: " + div;
        document.getElementById("resto").innerHTML = "Resto da Divisão: " + resto;
    }
}