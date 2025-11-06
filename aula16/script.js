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
imprimirDoisNumeros("5") */

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



