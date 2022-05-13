const getSavedCartItems = (eventListener, teste) => {
  const cartSection = document.getElementsByClassName('cart__items')[0];
  if (teste !== undefined) {
    localStorage.getItem('items');
  } else {
    cartSection.innerHTML = localStorage.getItem('items');
    const items = cartSection.childNodes;
    items.forEach((item) => item.addEventListener('click', eventListener));
  };
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}