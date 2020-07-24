var botao = document.querySelector('button')
var valorProjeto = document.querySelector('#valor_projeto')
var horasTrabalhadas = document.querySelector('#horas_trabalhdas')
var diasEfetivos = document.querySelector('#dias_efetivos')
var ferias = document.querySelector('#ferias')
var valor = document.querySelector('.botao_e_resultado h1')

function calcular(){
    
    var valorHora = (valorProjeto.value / (diasEfetivos.value * 4 * horasTrabalhadas.value)) + (ferias.value * diasEfetivos.value * horasTrabalhadas.value)

    if (!isNaN(valorHora)){
        valor.innerHTML = `R$ ${valorHora.toFixed(2)}`
    }
    else{
        valor.innerHTML = 'R$ 0,00'
    }
    
    valorProjeto.value = ''
    diasEfetivos.value = ''
    horasTrabalhadas.value = ''
    ferias.value = ''
}