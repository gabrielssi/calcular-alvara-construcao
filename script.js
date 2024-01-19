function LimparDados() {
  let campoMetragem = document.querySelector('input');
  campoMetragem.value = '';
  ExibirNaTela('h1', 'Vamos calcular novamente!');
  ExibirNaTela('p', 'Calcule o valor da taxa do alvará de construção de forma rápida e eficiente.');
}

function TaxaAlvaraCocalDoSul(metragem) {
  let ufrm = 4.4980;
  const referenciaMetragem = 70;
  let resultado;

  if (metragem <= referenciaMetragem) {
    resultado = ufrm * 21.00;
  } else {
    resultado = (0.475 * ufrm) * metragem;
  }

  let resultadoFinal = resultado.toFixed(2);
  return resultadoFinal;
}

function ExibirNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function ExibirResultadoNaTela(resultado) {
  ExibirNaTela('h1', `Você pagará R$ ${resultado}`);
  ExibirNaTela('p', 'Valor referente à cidade de Cocal do Sul/SC');
}

function BotaoCalcular() {
  let metragemUsuario = document.querySelector('input').value;

  // Verificar se a metragem está vazia
  if (metragemUsuario.trim() === '') {
    ExibirNaTela('h1', 'Ops!, você não inseriu nenhuma metragem');
    ExibirNaTela('p', "Clique em 'Novo Cálculo' para calcular novamente!");
    return; // Encerrar a função se a metragem estiver vazia
  }

  let resultado = TaxaAlvaraCocalDoSul(metragemUsuario);
  ExibirResultadoNaTela(resultado);
}
