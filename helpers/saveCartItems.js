const saveCartItems = (cartItens) => localStorage.setItem('items', cartItens);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
