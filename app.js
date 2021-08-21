const total = document.getElementById('total');
const percentual = document.querySelectorAll('.btn-math');
const qtdPessoas = document.getElementById('pessoa');
const resetar = document.getElementById('reset');


function percent(e) {
  e.preventDefault();
  totalConta = parseFloat(total.value);
  totalPessoa = qtdPessoas.value;

  recuperado = e.target.innerHTML;
  valorPercentual = parseFloat(recuperado.replace(',', '.'));

  calc(totalConta, valorPercentual, totalPessoa);
}
percentual.forEach(function listar(e) {
  e.addEventListener('click', percent)
})

function calc(total, percentual, qtdPessoas) {
  divisao = total / qtdPessoas;
  result = divisao * percentual / 100;

  valorTotal.innerHTML = `R$ ${total.toFixed(2)}`;
  valorPessoa.innerHTML = `R$ ${result.toFixed(2)}`;
}

function resete(e) {
  e.preventDefault();
  valorTotal.innerHTML = "R$ 0.00";
  valorPessoa.innerHTML = "R$ 0.00";
}

resetar.addEventListener('click', resete)
