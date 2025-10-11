/*const nomePessoa = prompt("qual o seu nome?")
const idadeMelhorAmigo = prompt ("qual a idade do seu melhor amigo?")

const maiorIdadeMelhorAmigo = true
console.log("Sua idade e maior que a do seu melhro amigo?, true") 

const minhaIdade = prompt("qual a minha idade?")
const idadeMelhorAmigo = prompt ("qual a idade do seu melhor amigo?")

const subtracao = minhaIdade - idadeMelhorAmigo
console.log( subtracao) 

const numeroPar = prompt("coloque um numero par!")
console.log(numeroPar)
 
const numeroPpar = 4
console.log(numeroPpar %2 )

// O padrao e sempre 0 porque todos os numeros sao pares //
// Acontece a mesma coisa sempre fica 0 mesmo o numero sendo impar //

let idadeEmAnos = prompt ("Qual sua idade em anos?")
console.log(idadeEmAnos)

idadeEmAnos = Number(idadeEmAnos)
console.log(idadeEmAnos* 12 )
console.log(idadeEmAnos* 365)
console.log (idadeEmAnos* 365 * 24 )

let doisNumero = prompt ("Me fale dois numeros!")
console.log(doisNumero)

let primeiroNumero = 2
let segundoNumero = 1
console.log(primeiroNumero > segundoNumero)
console.log(primeiroNumero <= segundoNumero)
console.log( primeiroNumero % segundoNumero === 0 )
console.log(segundoNumero % primeiroNumero === 0) 

const nome = "vagner"
const idade = 17 
 
// aspas duplas
const frase = ("meu nome e " + nome + "e minha idade é " + idade)

 // aspas simples
 console.log(frase);
 console.log(typeof frase)

 //tamplate 
 const frase2 = `O meu nome e ${nome} e minha idade e ${idade}`
 console.log(frase2);
 console.log(typeof frase2)

 const seuNome = prompt("qual o seu nome?")
 const corFavorita = prompt ("qual e a sua cor favorita? ")

 console.log ("seu nome é " + seuNome + " e sua cor favorita é " + corFavorita) 

 const nome = "VagnerBlodornMoura"
 console.log(nome.lenght)
 console.log (typeof nome)

 const fraseMaiuscula = "oieEEeEE"
 // metodo toLowerCase
 const fraseMinuscula = fraseInicial.toLowerCase()
 console.log(fraseInicial, fraseMaiuscula)
 // metodo toUpperCase
 const fraseMaiuscula = fraseInicial.toUpperCase()
 console.log(fraseInicial, fraseMaiuscula) 

 const frase = "Hoje comi cenoura"
 frase.includes("cenoura")
 frase.includes("batata")
 console.log(frase.includes("cenoura"))
 console.log(frase.includes("batata")) 

 const frase = "hoje comi cenoura,adoro cenoura "
 const novaFrase = frase.replaceAll("cenoura", "batata")
 console.log(novaFrase)

 const frase5 =  prompt( "escreva uma frase" )
 const fraseMaiuscula1 = frase5.toUpperCase()
 const novaFrase2 = frase5.replaceAll("o", "i")
 console.log(fraseMaiuscula1)
 console.log(novaFrase2)
console.log(frase5.length)

const racasCachorros = ["pitbull", "Labrador", "Pastor alemão", "pinscher", "buldog"]
const escolhaNumero = prompt("insira um numero de 0 a 4")
console.log(racasCachorros[escolhaNumero])

const pokemon = ["bulbasaur", "sqirtle", "charmander", "sceptile"]
console.log(pokemon.length)

const seriesBoas = ["Vikings", "The Big Bang Theory", "Friends",]

console.log(seriesBoas.includes("Vikings") seriesBoas.includes(GOT)) 

const numeros = [1,2,3]

numeros.push(4)
console.log(numeros)

numeros.push(5,6,7)
console.log(numeros) 

const meusPeixes =["palhaco", "mandarin", "esturjião"]
meusPeixes.pop()
console.log(meusPeixes)

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// índices (i) 0 1 2 3 4 5 6 7

letras.splice(2, 1)
// letras = ["A", "B", "D", "E", "F", "G", "H"]
// índices (i) 0 1 2 3 4 5 6

letras.splice(3, 2) // letras = ["A", "B", "D", "G", "H"]
console.log(letras)

const numeros4 = ("1", "2", "3", "4", "5", "6" )
console.log(numeros4.length)
numeros4.push(7)
numeros4.splice(3,2)
console.log(numeros4)*/

let array
console.log('a. ', array)

array = null 
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let I = 0 
console.log('d. ',array[i])
 
array [i+1] = 19 
 console.log('e. ', array)

 const valor = array[i+ 6]
 console.log('f. ', valor)

 // 

 const frase =prompt("escreva uma frase")
 console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

 const seuNome = prompt("Qual e o seu nome?")
 const seuEmail = prompt("qual e o seu e-mail")
const frase1 = `Olá, ${ seuNome }! O e-mail ${ seuEmail } foi cadastrado com sucesso. seja bem-vindo`
 console.log(frase1)

  //exercicio 3 // 
 const comidasPreferidas = ["arroz" , "frango" , "banana", "mel", "ovos"]
console.log(comidasPreferidas)

const minhasComidasPreferidas = "Essas sao minhas comidas preferidas:" 
const comidas = ["arroz" , "frango" , "banana" , "mel", "ovos"]
console.log(minhasComidasPreferidas , comidas)

const suaComidaPreferida = prompt("Qual a sua comida preferida?")
suaComidaPreferida[1] = suaComidaPreferida
console.log(suaComidaPreferida)

const arrayVazio = []

const tarefa1 = prompt("diga uma tarefa que precise reaizar no dia")
const tarefa2 = prompt("diga outra tarefa")
const tarefa3 = prompt("diga outra alem dessa")

arrayVazio.push(tarefa1,tarefa2,tarefa3)

const tarefasFeitas = prompt("escolha uma tarefa feita, 0,1 ou 2")
arrayVazio.splice(tarefasFeitas, 1)

console.log(arrayVazio)

let frutas = ["Banana", "Morango", "abacaxi", "laranja", "ameixa"]
let indiceDoAbacaxi = frutas.indexOf("abacaxi")
let tamanhoDaArray = frutas.length
console.log("indice de abacaxi:", indiceDoAbacaxi)
console.log("Tamanho do array de frutas:", tamanhoDaArray)









 

























