const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

alternativas: [
    {
        texto: "Isso é assustador!",
        afirmacao: [
            "No início ficou com medo do que essa tecnologia pode fazer.",
            "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
        ]
    },
    {
        texto: "Isso é maravilhoso!",
        afirmacao: [
            "Quis saber como usar IA no seu dia a dia.",
            "Pensou que IA pode ajudar em tarefas da sua vida."
        ]
    }
]
