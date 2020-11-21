function calculaSalario() {
    var nome = document.getElementById("nome").value;
    var salario = document.getElementById("salario").value;

    if (nome == "" || salario == ""){
        alert("Os campos devem ser todos preenchidos");
    }else if (salario < 0){
        alert("O salário deve ser maior de zero");
    }else{

        var valorAumantoSalario;
        var salarioNovo;
        var percentual;
        if (parseFloat(salario) <= 980 ){
            percentual = 20;
            valorAumantoSalario = parseFloat(salario) * parseFloat(percentual) / 100;
            salarioNovo = parseFloat(salario) + parseFloat(valorAumantoSalario);
        }else if (parseFloat(salario) > 980 && parseFloat(salario) <= 1300){
            percentual = 15;
            valorAumantoSalario = parseFloat(salario) * parseFloat(percentual) / 100;
            salarioNovo = parseFloat(salario) + parseFloat(valorAumantoSalario);
        }else if (parseFloat(salario) > 1300 && parseFloat(salario) <= 1800){
            percentual = 10;
            valorAumantoSalario = parseFloat(salario) * parseFloat(percentual) / 100;
            salarioNovo = parseFloat(salario) + parseFloat(valorAumantoSalario);
        }else if (parseFloat(salario) > 1800){
            percentual = 5;
            valorAumantoSalario = parseFloat(salario) * parseFloat(percentual) / 100;
            salarioNovo = parseFloat(salario) + parseFloat(valorAumantoSalario);
        }        

        document.getElementById("salarioAnterior").innerHTML = "Salario antes do reajuste: " + salario;
        document.getElementById("percentual").innerHTML = "Percentual Aumento: " + percentual + "%";
        document.getElementById("valorAumento").innerHTML = "Valor do aumento: " + valorAumantoSalario;
        document.getElementById("novoSalario").innerHTML = "Salário após o aumento: " + salarioNovo;
    }    
}


