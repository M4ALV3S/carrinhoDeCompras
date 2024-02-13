//Estado inicial 
let totalGeral = 0;
limpar();

//Recuperar valores, Nome, Quantidade e Valor
function adicionar() {
  let produto = document.getElementById('produto').value;
  let quantidade = document.getElementById('quantidade').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];

//Calcular o preço (subtotal)
  let preco = quantidade * valorUnitario;
  let carrinho = document.getElementById('lista-produtos');

//Adicionar produtos no carrinho
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`;

//Atualizar valor total
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0;
}

//Resetar todos os valores para 0
function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}