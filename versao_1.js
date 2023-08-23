/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


//const carta = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J , Q, K]
//const naipes = ["♥️", "♣️", "♦️","♠️"]//



console.log("Boas vindas ao jogo Blackjack")
let iniciarJogo = confirm("Gostaria de iniciar uma nova rodada?")
   const jogador1 = comprarCarta()
   const jogador2 = comprarCarta()
   const maquina1 = comprarCarta()
   const maquina2 = comprarCarta()
   const somaJogador = jogador1.valor + jogador2.valor
   const somaMaquina = maquina1.valor + maquina2.valor
if (iniciarJogo === true) {
    console.log(`Usuário - cartas: ${jogador1.texto}, ${jogador2.texto} - pontuação ${jogador1.valor + jogador2.valor}`)
   console.log(`"Computador - cartas: ${maquina1.texto}, ${maquina2.texto} - pontuação ${maquina1.valor + maquina2.valor}`)
   if (somaJogador > somaMaquina) {
      console.log("o jogador ganhou")
   } else if (somaJogador === somaMaquina) {
      console.log("Empate")
   } else {
      console.log("a maquina ganhou")
   }
} else {
   console.log("O jogo acabou.")
}
