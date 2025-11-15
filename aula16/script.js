/*function imprimirBemVindo(){
    console.log("Bem vindo Turma!")
}

function somaDeDoisNumeros(){
    const resultado = numero1 + numero2
    console.log(resultado)
}

function dobrarNumero(){
    const dobro = numero * 2 
    console.log(dobro)
}
function imprimirNome(nome){
    console.log("Oi", nome)
}
imprimirNome("Pamela")
imprimirNome("Vagner")
imprimirNome("Lucas") 

function imprimirDoisNumeros(DoisNumeros){
    console.log("A soma e", DoisNumeros)
}

imprimirDoisNumeros("3")
imprimirDoisNumeros("5") 

function determinaMonstro (temPeleGelada,transformaComLuaCheia,brilhaAoSol,temSedeDeSangue){
    if (brilhaAoSol&&temPeleGelada&&temSedeDeSangue){
        console.log("vampiro")
    } 
    if (transformaComLuaCheia){
        console.log("lobisomen")
    }
    else (determinaMonstro()) 
    console.log("humano")
    

}
determinaMonstro(true,false,true,true)

let num1 = Number(prompt("digite o num"))
let num2 = Number(prompt("digite o num2"))

function soma (num1 , num2){
    return num1 + num2
}
console.log("Numeros inseridos:",num1,num2)
console.log("soma:",soma(num1,num2))

let number1 = Number(prompt("digite o number"))
let number2 = Number(prompt("digite o number2"))

function diferenca (number1 , number2){
    return number1 + number2
}
console.log("Numeros inseridos:,number1, number2")
console.log("soma:",diferenca(number1, number2))

let numero1 = Number(prompt("digite o numero"))
let numero2 = Number(prompt("digite o numero2"))

function multiplicacao (numero1 , numero2){
    return numero1 + numero2
}
console.log("Numeros inseridos:",numero1,numero2)
console.log("soma:",multiplicacao(numero1,numero2))

let numeros1 = Number(prompt("digite o num"))
let numeros2 = Number(prompt("digite o num2"))

function divisao (numeros1 , numeros2){
    return numeros1 + numeros2
}
console.log("Numeros inseridos:",numeros1,numeros2)
console.log("soma:",divisao(numeros1,numeros2))

const professor = {
    nome : "Maria" ,
    idade : 28,
    tarefas: ["Dar aula", "Responder dúvidas"],
    contarPiada: function(){
    console.log("É pa vê ou pa comê? ")}
}

const filme = {
    direcao : "marcos siega " ,
    nome : "dexter" ,
    lancamento : 2022 ,
    lista: ["dexter", "jennifer", "zayas" , "desmond"],
    jaOlhei: function(){
        console.log("Ja olhei o filme")}
}

console.log(filme.direcao)
console.log(filme.nome)
console.log(filme.lancamento)
console.log(filme.lista)
console.log(filme.jaOlhei)

jaOlhei()

const colega ={
    nome:"vinicius",
    idade: 17, 
    musica:"funk",
}
console

const profssores = [
    {nome : "Lucas", modulo : 2},
    {nome : "dal", modulo : 1 },
    {nome : "valter", modulo : 1}
]
console.log("O professor:", profssores [0].nome, " deu o modulo:", profssores[0].modulo)


// exercicio da aula passada //
const filme = {
    direcao : "marcos siega " ,
    nome : "dexter" ,
    lancamento : 2022 ,
    lista: ["Xuxa", "jennifer", "zayas" , "desmond"],
    lista2: ["dexter morgan", "debra morgan", "angel batista", "joey quiin" ],
    jaOlhei: function(){
        console.log("Ja olhei o filme")}
}

console.log(filme.direcao)
console.log(filme.nome)
console.log(filme.lancamento)
console.log(filme.lista)
console.log(filme.lista2)
console.log(filme.jaOlhei) 

const amigo ={
    Nome :"Leomar",
    Idade :17,
    comida :   ['sushi','churrasco','pipoca'],
        melhorAmigo : {
       nome : "Vagner",
       idade : 17,
        }
}
console.log("O nome da pessoa é:", amigo.Nome , "e suas comidas preferidas sao:", amigo.comida[0,1,2], )
console.log (amigo.melhorAmigo)

const personagens = [
    {personagem : "Sasuke", idade : 17, estilo : "Nimjutso", jutsus : ["bola de fogo", "chidori", "amaterasu"]},
    {personagem : "Naruto", idade : 17, estilo : "Ninjutsu", jutsus : ["resengan", "harém", "mil clones das sombras"]},
    {personagem : "Obito", idade : 30, estilo : "Ninjutsu", jutsus : ["bola de fogo", "kamui"]}
  ]
  
  function adicionarPersonagem (perso) {
    personagens.push(perso)
    console.log("O personagem ${perso foi adicionado")
  }
   const personagem = {
    nome:"Lee",
    idade:17,
    estilo:"taijustu"
    jutsus:["lótus","vendaval"]
   }
   adicionarPersonagem(personagem)

   function buscarPersonagem(nomeBuscado){
function personagem(perso){
    return perso.nome.toLowerCase()=== nomeBuscado.toLowerCase()
}
const personagemEncontrado = personagem.find.(personagem)
if (personagemEncontrado){

    return personagemEncontrado;
}else {
    return `Personagem com nome "${nomeBuscado}" nao encontrado, `;
}
} */

const filme = {
    nome: "Auto da copadecida",
    ano:2000,
    elenco: [
        "matheus nachtergaele", "selton mello", "cenise fraga", "virginia cavendish"
    ],
    transmissoesHoje: [
        {canal:"telecine", horarios: "21h"},
        {canal:"canal brasil", horarios: "19h"},
        {canal: "globo", horarios: "14h"}
    ]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length -1])
console.log(filme.transmissoesHoje[2])
//o primeiro console.log vai imprimir o primeiro indice que e 0(matheus nachtergaele).//
//o segundo console.log vai imprimir a virginia cavendish porque ele vai pegar um que nao tenha e vai pegar o indice 3//
// o console.log vai pegar o indice 2 que e o (globo e horarios 14h)//

const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = {...cachorro, nome: "juba"}

const tartaruga = {...gato, nome:gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

  // o primeiro console.log imprimi exatamente a ,esma coisa que esta escrito na variavel//
  // 

  //exemplo de entrada
  const pessoa ={
    nome: "vagner blodorn",
    apelidos:["bombadinho", "vaguinho", "vava"]
  }
  // exemplo de saida 
  "eu sou lucas, mas pode me chamar de :"

  
