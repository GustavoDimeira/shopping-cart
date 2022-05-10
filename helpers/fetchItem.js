//  const fetch = require("node-fetch");

const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const infos = fetch(url)
  .then((resposta) => resposta.json())
  .catch((error) => console.log(error));
  return infos;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
