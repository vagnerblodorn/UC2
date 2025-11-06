/*let i = 0
while (i<10){
console.log(i)
i++
}//termino corrida laço

let estomago = 0 
while (estomago<100){
    console.log("quero comer mais coxinhas", estomago)
    estomago = estomago +10
}

let I
let resultado = 0 
const numeros = [10,3, 50 ,7 , 0]
while (I !== 0 ){
    i = Number(prompt("coloque um numero"))
    resultado += I
}
console.log(resultado)

const numeros2 = [14, 67, 89, 15, 23]
for(let i= 0; i < 5; i++){
    const elemento = numeros[i]
    console.log(elemento)
}

let maiorNumero = 0
const numeros1 = [11,15,18,14,12,13]
for(let i=0; i < 6; i++){
if(numeros1[i] %2===0){
    soma = soma + numeros1[i]
}
}
console.log("a soma dos numeros e igual a:", soma)

const lista = [10, 11, 12, 15, 18, 19, ]

const quantidadeTotal = Number(prompt("Digite a qantidade de linhas: "))
let quantidadeAtual = 0 
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
console.log(linha)
quantidadeAtual++
}

let bichinhos = Number(prompt("quantos bichinhos de estimacao voce tem?" ))
if(bichinhos===0){
    console.log("voce pode adotar um pet!")
}else if(bichinhos>0){
    let nomesBichinhos = []
    for(let i = 0; i<bichinhos; i++){
        let nomes = prompt("digite o nome do seu pet:")
        nomesBichinhos.push(nomes)
    }
    console.log("Os nomes dos seus pets sao:", nomesBichinhos)
}
// Ele vai perguntar quantos bichinhos o usuario tem,se for 0 ele mostra mostra uma mensagem sugerindo adotar um pet//

let arrayOriginal = [1,2,3,4,5,6,7,8,9,10]
for (let numero of arrayOriginal) {
    console.log(numero)
}
for (let numero of arrayOriginal) {
    console.log(numero/10)
}
let arraypares = [2,4,6,8,10]
for (let i = 0; i<7; i++)
if(arrayOriginal[i] %2===0) {
    console.log(arrayOriginal[i])
}

let listaNumeros = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i<10; i++){
    console.log(listaNumeros[i])
}

let numerosPares = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(i = 0; i < numerosPares[i]; i++)
if(numerosPares[i] %2===0){
    console.log(numerosPares[i])
}*/


let numerosTauada = number(prompt("digite um numero de 1 a 10 e veja a tabuada dele"))
for(i = 0; i <= 10; i++){
    let resultado1 = numerosTauada * i
}
console.log(numerosTauada[i], "x", i, "=", resultado1)




