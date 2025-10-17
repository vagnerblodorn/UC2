/*let condicao1 = true
let condicao2 = false 

if(condicao1&&condicao2){
    console.log("Executou o if do operador && AND")
}
if(condicao1||condicao2){
    console.log("Executou o if do operador || OR")
}
if(!condicao1){
    console.log("Executou o if do operador ! NOT")
}

let idade = 18
const idadeMinima = prompt("Qual e a sua idade?")
const ensinoMedio = prompt("voce concluiu o ensino medio? (sim/nao")
const outrafaculdade = prompt("voce esta cursando outra faculdade? (sim/nao)")

let concluidoEnsinoMedio = true
let idadeMaior18 = idade >= 18  
let cursandoOutraFaculdade = false 

if (concluidoEnsinoMedio && idadeMaior18 && !cursandoOutraFaculdade){
    console.log("Pode entrar na faculdade")
}else {
    console.log("nao pode entrar na faculdade")
}

  //exercicio de fixacao  
const respostaDoUsuario = prompt("Digite o numero que voce quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
        console.log("Passou no teste")
    }else {
        console.log("Nao passou no teste")
    }

    // este codigo faz pergunta para o console e a resposta adicionada no console pelo usuario e divivida 
    //por o if que tem divisao e a resposta igual a zero se passou
    //e o else serve para se o usuario reposnder com numero impar falando que nao passou 

    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
        case "Laranja":
            preco = 3.5
            break;
            case "maca":
                preco = 2.25
                break;
                case "uva":
                    preco = 0.30
                    break
                    case "pera":
                        preco = 5.5
                        break; // BREAK PARA O ITEM c.
                        defaut:
                        preco = 5
                        break;
    }
    console.log("O preco da fruta", fruta, "")

    // este codigo serve para colocar no console as frutas com os precos do lado, quando o usuario botar o nome da fruta ela ira aparecer com o seu preco ao lado//
    // exemplo:usuario digitou no console maca: ai no console ira aparecer "maca RS2.25"
    // se tirar o BREAK ele vai usar os dois codigos juntos//

    const numero = Number(prompt("digite o primeiro numero."))
    if (numero > 0){
        console.log("esse numero passou no teste")
        let mensagem = "essa mensagem e secreta!!!"

    }
    // a primeira linha esta pedindo para voce digitar um numero//
    // se tivesse o -10 nao imprimirai nada,pois nao possue Else//
    // VA DAR ERRO POis a variavel da mensagem foi declarada dentro do if, e o console.log esta tentando usala fora do escopo//


const qualSuaIdade = Number(prompt("digite a sua idade"))
if (qualSuaIdade >= 18 ) {
    console.log("voce pode dirigir?")
}else{
    console.log("voce nao pode dirigir?")
}*/

let turno = prompt("Em qual turno voce estuda? Digite M (matutino) ou V (vaspertino) ou N (noturno)")
if (turno === "m"){
    console.log("Bom dia!")
}else if (turno === "v"){
    console.log("Boa tarde!")
}else if (turno === "n"){
    console.log("Boa noite!")
}else {
    console.log("turno desconhecido")
}







