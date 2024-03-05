document.addEventListener('DOMContentLoaded', function () {
  setCartSize();
  buildCart();
});

function buildCart() {
  const cart = getCart();
  const cartItems = document.getElementById('cart-items') as HTMLDivElement;
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item) => {
    const { productId, variantId, sizeId, quantity } = item;
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const cartItemImageBox = document.createElement('div');
    cartItemImageBox.addEventListener('click', () => {
      const linkUrl = `./product.html?pid=${productId}&vid=${variantId}`;
      window.location.href = linkUrl;
    });
    const cartItemImage = document.createElement('img');
    cartItemImageBox.classList.add('cart-item-image');
    cartItemImage.src =
      clothesData[productId]['vid_' + variantId]['image-front'];
    cartItemImageBox.appendChild(cartItemImage);

    const cartItemInfoBox = document.createElement('div');
    cartItemInfoBox.classList.add('cart-item-info');

    const cartItemInfoName = document.createElement('h4');
    cartItemInfoName.textContent = clothesData[productId]['p-name'];
    const cartItemInfoVariant = document.createElement('h6');
    cartItemInfoVariant.textContent =
      clothesData[productId]['vid_' + variantId]['v-name'];
    const cartItemInfoSize = document.createElement('h6');
    cartItemInfoSize.textContent = sizeId;
    cartItemInfoBox.appendChild(cartItemInfoName);
    cartItemInfoBox.appendChild(cartItemInfoVariant);
    cartItemInfoBox.appendChild(cartItemInfoSize);

    const cartItemQuantityBox = document.createElement('div');
    cartItemQuantityBox.classList.add('cart-item-quantity');
    const cartItemMin = document.createElement('button');
    cartItemMin.innerHTML = '-';
    cartItemMin.addEventListener('click', () => {
      updateCartItem({
        productId: productId,
        variantId: variantId,
        sizeId: sizeId,
        quantity: -1,
      });
      buildCart();
    });
    const cartItemInfoQuantity = document.createElement('h6');
    cartItemInfoQuantity.textContent = quantity.toString();
    const cartItemPlus = document.createElement('button');
    cartItemPlus.innerHTML = '+';

    cartItemPlus.addEventListener('click', () => {
      updateCartItem({
        productId: productId,
        variantId: variantId,
        sizeId: sizeId,
        quantity: 1,
      });
      buildCart();
    });
    const cartItemRemove = document.createElement('button');
    cartItemRemove.innerHTML = 'Remove';

    cartItemRemove.addEventListener('click', () => {
      updateCartItem({
        productId: productId,
        variantId: variantId,
        sizeId: sizeId,
        quantity: -9999999999,
      });
      buildCart();
    });
    cartItemQuantityBox.appendChild(cartItemMin);
    cartItemQuantityBox.appendChild(cartItemInfoQuantity);
    cartItemQuantityBox.appendChild(cartItemPlus);
    cartItemQuantityBox.appendChild(cartItemRemove);

    const cartItemPriceBox = document.createElement('div');
    cartItemPriceBox.classList.add('cart-item-price');

    const extractedNumber: number = parseFloat(
      clothesData[productId]['costs'].slice(
        clothesData[productId]['costs'].indexOf('\u00a3') + 1,
      ),
    );

    const cartItemPrice = document.createElement('h4');
    cartItemPrice.textContent = `£${extractedNumber.toFixed(2)}`;
    const cartItemPriceAll = document.createElement('h4');
    cartItemPriceAll.textContent = `£${(quantity * extractedNumber).toFixed(
      2,
    )}`;

    cartItemPriceBox.appendChild(cartItemPrice);
    cartItemPriceBox.appendChild(cartItemPriceAll);

    cartItem.appendChild(cartItemImageBox);
    cartItem.appendChild(cartItemInfoBox);
    cartItem.appendChild(cartItemQuantityBox);
    cartItem.appendChild(cartItemPriceBox);

    cartItems.appendChild(cartItem);

    total += quantity * extractedNumber;
  });

  buildCartTotal(total);
}

function buildCartTotal(total: number) {
  const cartTotal = document.getElementById(
    'cart-total-text',
  ) as HTMLSelectElement;
  cartTotal.textContent = `Total: £${total.toFixed(2)}`;
}

function updateCartItem(options: {
  productId: string;
  variantId: string;
  sizeId: string;
  quantity: number;
}) {
  const { productId, variantId, sizeId, quantity } = options;

  const cart = getCart();
  const existingItemIndex = cart.findIndex(
    (item: CartItem) =>
      item.productId === productId &&
      item.variantId === variantId &&
      item.sizeId === sizeId,
  );

  cart[existingItemIndex].quantity += quantity;
  if (cart[existingItemIndex].quantity <= 0) {
    cart.splice(existingItemIndex, 1);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  setCartSize();
}
