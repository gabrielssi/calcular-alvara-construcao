//DADOS REFERENTE AO ANO DE 2024


//Entrada de Dados

let metragemUsuario = 100;

let ufrm = 4.4980; //ANO: 2024
const referenciaMetragem = 70; //VALOR FIXO

function calcularAlvaraMenor70() {
  let resultado = ufrm * 21.00;
  return console.log(resultado.toFixed(2));
};

function calcularAlvaraMaior70() {
  let resultado = (0.475 * ufrm) * metragemUsuario;
  return console.log(resultado.toFixed(2));
};

if (metragemUsuario <= referenciaMetragem) {
  calcularAlvaraMenor70();
} else {
  calcularAlvaraMaior70();
}

