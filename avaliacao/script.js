//criando um array de objetos
let personagens = [
    {nome: "Legulas", 
    classe: "Ranger",
    nivel: 12,
    pontosDeVida: 108,
    habilidades: ["Força","Carismo","Destreza"],
    historicoDeAcoes: []},

    {nome: "Boromir",
    classe: "Fighter",
    nivel:11,
    pontosDeVida: 132,
    habilidades: ["Defesa com escudo","Ataque extra","Liderança em batalha"],
    historicoDeAcoes: []},

    {nome: "Gimli",
    classe: "Barbarian",
    nivel: 12,
    pontosDeVida: 148,
    habilidades: ["Pele grossa como pedra","Ataque poderoso","Tenacidade de ferro"], 
    historicoDeAcoes: []} //criei um array para armazenar o historico de acoes.
]

function atacar(atacador, alvo, dano){
    alvo.pontosDeVida -= dano
    const texto = atacador.nome + " atacou " + alvo.nome + " causando " + dano + " de dano."
    atacador.historicoDeAcoes.push(texto)//enviando para o historico de acoes do personagem(usando push)
    console.log(texto)//console.log para imprimir
}

function defender(perso){
    const texto2 = perso.nome + " está se defendendo."
    perso.historicoDeAcoes.push(texto2)
    console.log(texto2)
}
//if(se) para verificar se possui a habilidade ou não
function usarHabilidade(personage, habilidade){
    if(!personage.habilidades.includes(habilidade)) {
        console.log(personage.nome + " não possui esta habilidade!")
        return
    }
    const texto3 = personage.nome + " usou a " + habilidade + "."
    personage.historicoDeAcoes.push(texto3)
    console.log(texto3)
}
//cria uma função
function buscarPersonagem(nome){
    const personagem = personagens.find(person => person.nome.toLowerCase() === nome.toLowerCase())
    if(personagem){
        console.log(personagem)
        return personagem
    } else {
        console.log("Personagem não encontrado!")
        return null
    }
}
function excluirPersonagem(nome) {
        delete personagens[nome]
        nome.toLowerCase()
}

//aqui estou chamando a função
atacar(personagens[0], personagens[2], 22)
defender(personagens[2]);
usarHabilidade(personagens[1], "Liderança em batalha para ajudar",personagens[2])
buscarPersonagem("Legulas")