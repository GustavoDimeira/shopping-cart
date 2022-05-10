const getSavedCartItems = (eventListener) => {
  const cartSection = document.getElementsByClassName('cart__items')[0];
  cartSection.innerHTML = localStorage.getItem('items');
  const items = cartSection.childNodes;
  items.forEach((item) => item.addEventListener('click', eventListener));
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}