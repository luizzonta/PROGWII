function contagemRegressiva() {
    var time = document.getElementById("contagem").value;

    if (time == ""){
        alert("O campo deve conter numero de 5 a 15");
    }else if (time < 5 || time > 15){
        alert("Os números para contagem deve ser entre 5 e 15");
    }else{

        var inicioContador = setInterval(function(){
            console.log(time);
            document.getElementById("resultado").innerHTML = time;

            if (time === 0) {
                clearInterval(inicioContador);
                document.getElementById("resultado").innerHTML = "BUUUUMMMMMM!!!!!!";
            }
            time--
        }, 1000);
    }    
}


