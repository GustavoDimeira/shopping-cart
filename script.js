function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(item) {
  item.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addCarrinho = async (prodClick) => {
  const clicked = prodClick.target.parentNode;
  const productId = getSkuFromProductItem(clicked);
  const item = await fetchItem(productId);
  const pai = document.getElementsByClassName('cart__items')[0];
  const objPassado = {
    sku: item.id,
    name: item.title,
    salePrice: item.price,
  };
  pai.appendChild(createCartItemElement(objPassado));
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', addCarrinho);
  section.appendChild(button);

  return section;
}
//  minhas funcoes
const criarIcone = async () => {
  const PCs = await fetchProducts('computador');
  const pai = document.getElementsByClassName('items')[0];
  PCs.forEach((PC) => {
    const objPassado = {
      sku: PC.id,
      name: PC.title,
      image: PC.thumbnail,
    };
    pai.appendChild(createProductItemElement(objPassado));
  });
};

window.onload = () => {
  criarIcone();
};