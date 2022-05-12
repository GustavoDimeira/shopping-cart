require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('fetchItem é uma função;', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('ver se ao chama-la com o argumento "MLB1615760527" a fetch é chamada', async() => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Teste se, ao chamar a função fetchItem com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Teste se o retorno da função fetchItem com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const teste = await fetchItem('MLB1615760527')
    expect(teste).toBe(item);
  });
  test ('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error("mensagem esperada aqui") para comparar com o objeto retornado da API.', async () => {
    const teste = new Error('You must provide an url');
    expect(await fetchItem()).toEqual(teste);
  });
});
