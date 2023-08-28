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

    console.log("Boas vindas ao jogo Blackjack")
    let iniciarJogo = confirm("Gostaria de iniciar uma nova rodada?")
       const jogador1 = comprarCarta()
       const jogador2 = comprarCarta()
       const maquina1 = comprarCarta()
       const maquina2 = comprarCarta()
       const somaJogador = jogador1.valor + jogador2.valor
       const somaMaquina = maquina1.valor + maquina2.valor
    if (iniciarJogo === true) {
       confirm (`Usuário - cartas: ${jogador1.texto}, ${jogador2.texto},
       Computador - cartas: ${maquina1.texto}. Deseja comprar mais uma carta?`)
       //if (confirm === true)
       //return 


       //if (jogador1 && jogador2 === "A")
       
       if (somaJogador > somaMaquina) {
         alert("o jogador ganhou")
       } else if (somaJogador === somaMaquina) {
         alert("Empate")
       } else {
          alert("a maquina ganhou")
       }
    } else {
       alert("O jogo acabou.")
    }