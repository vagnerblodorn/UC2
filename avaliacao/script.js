const personagens = [
    {personagem : "Legolas", classe :"Ranger",nivel: 12, hp : 108, habilidades : ["Forca","Carisma","Destreza"], historicoDeAcoes : "Ajudou a formar a sociedade do anel para destruir o Um Anel"},
    {personagem : "Boromir", classe : "fighter",nivel:11, hp : 132, habilidades : ["defesa com escudo","ataque extra","lideranca de batalha"], historicoDeAcoes:"tornou-se membro da sociedade do Anel"},
    {personagem : "Gimli", classe : "barbarian", nivel:12, hp:148, habilidades : ["pele grossa como pedra","ataque poderoso","tenacidade de ferro"], historicoDeAcoes :"travou competicoes amistosas Legolas para ver quem abatia mais inimigos"},

]

const legolas = {
    nome: "Legolas",
    classe: "Patrulheiro",
    nivel: 12,
    hp: 108,
    habilidades: ["Tiro Preciso", "Ataque Duplo"],
    historicoAcoes: []
};

const boromir = {
    nome: "Boromir",
    classe: "Guerreiro",
    nivel: 11,
    hp: 132,
    habilidades: ["Liderança de Batalha"],
    historicoAcoes: []
};

const gimli = {
    nome: "Gimli",
    classe: "Anão Guerreiro",
    nivel: 12,
    hp: 148,
    habilidades: ["Fúria Anã"],
    historicoAcoes: []
};

function atacar(atacante, alvo, dano) {
    alvo.hp -= dano;
    const texto = atacante.nome + " atacou " + alvo.nome + " causando " + dano + " de dano.";
    atacante.historicoAcoes.push(texto);
    console.log(texto);
}

function defender(personagem) {
    const texto = personagem.nome + " está defendendo.";
    personagem.historicoAcoes.push(texto);
    console.log(texto);
}

function usarHabilidade(personagem, habilidade) {
    if (!personagem.habilidades.includes(habilidade)) {
        console.log(personagem.nome + " não tem essa habilidade.");
        return;
    }

    const texto = personagem.nome + " usou " + habilidade + ".";
    personagem.historicoAcoes.push(texto);
    console.log(texto);
}

atacar(legolas, gimli, 12);
usarHabilidade(gimli, "Fúria Anã");
defender(boromir);
atacar(gimli, legolas, 18);

console.log("Histórico do Legolas:", legolas.historicoAcoes);
console.log("Histórico do Gimli:", gimli.historicoAcoes);
console.log("Histórico do Boromir:", boromir.historicoAcoes);