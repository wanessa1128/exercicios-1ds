// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest
const prompt = require(`prompt-sync`)()
// CRIE UMA LÓGICA ABAIXO

let dia = 1
let continuarProducao 
let total = 0
let resumo = ""

do{
    let num = parseInt(prompt("Quantas peças devem ser produzidas? "))
    let pecas = 0

    while (pecas < num) {
        pecas++
        console.log(`Peça ${pecas} produzida com sucesso.`)
    }

    total += pecas
   
    if(pecas == num){
        console.log("Meta alcançada!")
    } else {
        console.log("Meta não alcançada.")
    }
   
    console.log(`Total Geral:${total}`)
    resumo += ` Resumo dos dias anteriores:
    Dia ${dia}: ${pecas} peças produzida(S) com sucesso \n`
    dia++
    continuarProducao = prompt("Deseja simular outro turno? (S/N): ").toUpperCase()
}while(continuarProducao == "S")
console.log(resumo)
console.log(`Total geral:${total}`)
console.log("Encerrando sistema de produção...")