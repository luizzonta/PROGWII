const tag = document.querySelector('input[name="temperatura"]')
const resultados = document.querySelector('div.resultados')

tag.addEventListener('blur', function(evento) {
    
    var temperaturaC = document.getElementById("temperatura").value;
    var temperaturaF = (parseFloat(temperaturaC)*9/5)+32;

    document.getElementById("resultado").innerHTML = "A temperatura em graus Fahrenheit é: " + temperaturaF;

   
})