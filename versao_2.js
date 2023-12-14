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

cartasUsuario = [];
cartasComp = [];
let continua, msgJogador, msgComputador, valorJogador = 0, valorComputador = 0;

if (confirm('Bem-vindo ao jogo BlackJack!\nQuer iniciar uma nova rodada?')) {
   let verificacao = true;
   while (verificacao) {
      cartasUsuario.push(comprarCarta());
      cartasUsuario.push(comprarCarta());
      cartasComp.push(comprarCarta());
      cartasComp.push(comprarCarta());
      if (((cartasUsuario[0].valor + cartasUsuario[1].valor) === 22) || ((cartasComp[0].valor + cartasComp[1].valor) === 22)) {
         cartasUsuario.pop();
         cartasUsuario.pop();
         cartasComp.pop();
         cartasComp.pop();
      } else {
         break;
      }
   }
   let continua = confirm(`Suas cartas: ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}. A carta revelado do computador é ${cartasComp[0].texto}.\nDeseja comprar mais cartas?`);
   msgJogador = '';
   valorJogador = 0;
   for (let i = 0; i < cartasUsuario.length; i++) {
      msgJogador += String(cartasUsuario[i].texto);
      valorJogador += Number(cartasUsuario[i].valor);
   }
   msgComputador = '';
   valorComputador = 0;
   for (let j = 0; j < cartasComp.length; j++) {
      msgComputador += String(cartasComp[j].texto);
      valorComputador += Number(cartasComp[j].valor);
   }
   while (continua) {
      msgJogador = '';
      valorJogador = 0;
      cartasUsuario.push(comprarCarta());
      for (let i = 0; i < cartasUsuario.length; i++) {
         msgJogador += String(cartasUsuario[i].texto);
         valorJogador += Number(cartasUsuario[i].valor);
      }
      if (valorJogador > 21) {
         continua = false;
      } else {
         continua = confirm(`Suas Cartas são: ${msgJogador}. A carta revelado do computador é ${cartasComp[0].texto}.\nDeseja comprar mais cartas?`);
      }
   }
   if (valorJogador <= 21) {
      let continua2 = true;
      while (continua2) {
         if (valorComputador < 20 && valorComputador < valorJogador) {
            msgComputador = '';
            valorComputador = 0;
            cartasComp.push(comprarCarta());
            for (let j = 0; j < cartasComp.length; j++) {
               msgComputador += String(cartasComp[j].texto);
               valorComputador += Number(cartasComp[j].valor);
            }
         }
         if (valorComputador === 21) {
            continua2 = false;
         } else if (valorComputador > valorJogador) {
            continua2 = false;
         } else if (valorComputador >= valorJogador) {
            continua2 = false;
         }

      }
   }

   if (valorJogador < valorComputador && valorComputador <= 21) {
      alert(`Usuário - Cartas: ${msgJogador} - Pontuação: ${valorJogador}\nComputador - Cartas: ${msgComputador} - Pontuação: ${valorComputador}.\nO computador ganhou!`);
   } else if (valorComputador < valorJogador && valorJogador <= 21) {
      alert(`Usuário - Cartas: ${msgJogador} - Pontuação: ${valorJogador}\nComputador - Cartas: ${msgComputador} - Pontuação: ${valorComputador}.\nO Jogador ganhou!`);
   } else if (valorJogador === valorComputador) {
      alert(`Usuário - Cartas: ${msgJogador} - Pontuação: ${valorJogador}\nComputador - Cartas: ${msgComputador} - Pontuação: ${valorComputador}.\nEmpatou !!!`);
   } else if (valorJogador > 21) {
      alert(`Usuário - Cartas: ${msgJogador} - Pontuação: ${valorJogador}\nComputador - Cartas: ${msgComputador} - Pontuação: ${valorComputador}.\nO computador ganhou!`);
   } else if (valorComputador > 21) {
      alert(`Usuário - Cartas: ${msgJogador} - Pontuação: ${valorJogador}\nComputador - Cartas: ${msgComputador} - Pontuação: ${valorComputador}.\nO Jogador ganhou!`);
   } else {
      alert(`Usuário - Cartas: ${msgJogador}\nComputador - Cartas: ${msgComputador}`)
   }

} else {
   alert('O jogo acabou.');
}
