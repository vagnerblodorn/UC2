let link = {
    Nome: "link",
    hp:100,
    roupees:300,
    armaEquipada:"Marter sword",
    inventario:["Bumerangue", "Bomba", "Escudo Hylian", "Arco"],
    historicoDeAcoes:[]
};
let Zelda = {
    Nome: "Zelda",
    hp:130,
    roupees:330,
    armaEquipada:"Arco da luz",
    inventario: ["Marcador Sheikah", "Esfera de Luz", "Capa Real"],
    historicoDeAcoes:[]
};
// Esses objetos representam personagens de um jogo. 
// Cada personagem tem atributos como nome, vida (hp), moedas (roupees), arma equipada, inventário de itens e um histórico de ações.

 

let danoMasterSword = 70
 let danoBomba = 50
 let danoBumerangue = 30
 // Essas variáveis definem o quanto cada arma causa de dano em pontos de vida (hp) quando usada numa batalha.

 
 
 const danoMasterSword1 = 70;
function atacar(inimigoNome, multiplicadorDano) {
    const danoCausado = danoMasterSword1 * multiplicadorDano;
 
link.historicoDeAcoes.push(`Atacou ${inimigoNome} causando ${60} de dano.`);
console.log(`Atacou ${inimigoNome} causando ${60} de dano.`);
 }
 atacar("Octorok", 1);
 atacar("Bokoblin", 1.5);
 // A função atacar permite que Link ataque inimigos, calcula o dano com base na arma e multiplicador, 
// registra a ação no histórico de Link e mostra no console o resultado do ataque.

 
 
 function comprar(custo) {
    if (link.roupees >= custo) {
        link.roupees -= custo; 
        link.inventario.push("Poção de Vida");
 

link.historicoDeAcoes.push(
    `Comprou Poção de Vida por ${custo} Rupees.`
);
console.log(`Link comprou uma pocao de vida por ${custo} Roupees.`);
    } else {
        console.log("Link nao tem Rupees suficiente!");
    }
}
comprar(120);
// A função comprar permite que Link adquira itens usando Roupees.
// Se ele tiver dinheiro suficiente, o item é adicionado ao inventário, o custo é descontado e a ação é registrada.
// Caso contrário, é exibida uma mensagem de erro no console.



const curaDaPocao = 50;
function curar(){
    if(link.inventario.includes("pocao de vida") && link.hp < 100){
        link.hp += curaDaPocao;
        
        const indice = link.inventario.indexOf("Pocao de Vida");
        link.inventario.splice(indice, 1);
        
        link.historicoDeAcoes.push("Usou Pocao de Vida.");
        
    } else {
        console.log("Não tem pocao ou HP já está cheio!");
    }
}
//A funcao curar permite que o Link recupere HP usando uma pocao de vida.
//Ela verifica se há pocao no intentario e se o HP esta cheio,aplica a cura, remove a pocao do inventario e registra a acao 
//Caso contrario,mostra uma mensagem informando que nao e possivelusar a pocao. 


function verificarInventario() {
    for (let i = 0; i < link.inventario.length; i++) {
        const item = link.inventario[i];
        console.log(`Item encontrado no inventário: ${bomba}`);

        if (item === "Bomba") {
            console.log("Cuidado! Bomba encontrada!");
        }
    }
}
//A função verificarInventario percorre todos os itens do inventário de Link, exibe cada um no console 
// e dá um alerta caso encontre uma Bomba.



function verificarStatus() {
    console.log("Nome: " + link.Nome);
    console.log("HP: " + link.hp);
    console.log("Roupees: " + link.roupees);
    console.log("Arma Equipada: " + link.armaEquipada);
    console.log("Inventário: " + link.inventario.join(", "));
    console.log("Histórico de Ações: " + link.historicoDeAcoes.join(", "));
}
//Esta funcao exibe todas as informacoes de Link incluindo(Nome,HP,Roupess,arma equipada,inventario,historico de acoes).



function entrarCaverna(nivel) {
    if (link.armaEquipada === "Master Sword" || nivel <= 5) {
        console.log("Acesso liberado! Link entrou na caverna.");
    } else {
        console.log("Acesso negado! Link não pode entrar na caverna.");
    }
}
entrarCaverna(8);
entrarCaverna(4);
    //A função entrarCaverna verifica se Link pode entrar em uma caverna com base no nível da caverna ou se ele está equipado com a Master Sword.
    //Sea funcao for correta, o acesso e liberado, caso contrario, é negado.

