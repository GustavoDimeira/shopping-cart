const fetchProducts = async (produto) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  const pedido = fetch(url)
  .then((resposta) => resposta.json())
  .then((PCs) => PCs.results)
  .catch(() => new Error('You must provide an url'));
  return pedido;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}