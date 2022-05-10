const saveCartItems = (cartItens) => localStorage.setItem('items', cartItens.innerHTML);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
