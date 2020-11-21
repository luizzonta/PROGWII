const animais_tag = document.querySelector('div.animais')
//const animais_filter = document.querySelector('div.animais_filter')
//const animais_map = document.querySelector('div.animais_map')
//const animais_reduce = document.querySelector('div.animais_reduce')

const resultado_tag = document.querySelector('div.resultados')

var animais = [ 
    { nome: "Butters", idade: 3, tipo: "cachorro" },
    { nome: "Lizzy", idade: 6, tipo: "cachorro" },
    { nome: "Red", idade: 1,tipo: "gato" },
    { nome: "Joey", idade: 3, tipo: "gato" }
]

animais.push({nome: "Kira", idade: 5, tipo: "cachorro"});


addEventListener('load', function() {

    animais_tag.innerHTML += '<h3>Meus Animais</h3>'
    animais.forEach(animal => {
        animais_tag.innerHTML += `<p>${animal.nome} - ${animal.idade} - ${animal.tipo}<p>`
    });
    animais_tag.innerHTML += "<hr />"

    //Função filter para novo array chamado cachorros e filtrar apenas os cachorros
    let cachorros = animais.filter((animal) => {
      return animal.tipo === 'cachorro';
    })

    animais_tag.innerHTML += '<h3>Apenas Cachorros</h3>'
    cachorros.forEach(dog => {
      animais_tag.innerHTML += `<p>${dog.nome} - ${dog.idade} - ${dog.tipo}<p>`
    });
    animais_tag.innerHTML += "<hr />"

    //Função Map
    //const animaisMap = animais.slice();
    let cachorrosIdadeReal = cachorros.map((idadeCachorro) => {
      return idadeCachorro.idade *= 7;
    })

    animais_tag.innerHTML += '<h3>Idade Real de cada Cachorro</h3>'
    cachorrosIdadeReal.forEach(cachorro => {
      animais_tag.innerHTML += `<p>${cachorro}<p>`
    });
    animais_tag.innerHTML += "<hr />"

    //função Reduce para calcular a soma da idade de todos os animais
    let calcIdade = cachorros.reduce((sum, animal) => {
      return sum + animal.idade;
    }, 0);

    animais_tag.innerHTML += '<h3>Idade de todos os animais: ' + calcIdade + '</h3>'
    
})