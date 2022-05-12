//  const fetch = require("node-fetch");

const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const infos = fetch(url)
  .then((resposta) => resposta.json())
  .catch(() => new Error('You must provide an url'));
  return infos;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
