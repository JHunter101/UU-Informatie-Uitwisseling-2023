document.addEventListener('DOMContentLoaded', function () {
  setCartSize();
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const searchParams = url.searchParams;
  const pid = searchParams.get('pid');
  let vid = searchParams.get('vid');

  if (vid === null) {
    vid = '01';
  }

  if (pid) {
    loadProductInfo(pid, vid);
    loadProductImages(pid, vid);
  } else {
    window.location.href = './';
  }
});

function loadProductImages(pid: string, vid: string) {
  const productImages: HTMLElement | null =
    document.getElementById('product-images');

  if (productImages) {
    productImages.innerHTML = '';
    ['image-front', 'image-back', 'image-extra', 'image-worn'].forEach(
      (imageType) => {
        const pImgBox = document.createElement('div');
        const pImg = document.createElement('img');
        pImgBox.classList.add('p-img');
        pImg.src = clothesData[pid]['vid_' + vid][imageType];
        pImgBox.appendChild(pImg);
        productImages.appendChild(pImgBox);
      },
    );
  }
}

function loadProductInfo(pid: string, vid: string) {
  const product = clothesData[pid];
  const variant = product['vid_' + vid];

  const productNameElement = document.getElementById('product-name');
  if (productNameElement) {
    productNameElement.textContent = product['p-name'];
  }

  const productColorSelect = document.getElementById(
    'product-color',
  ) as HTMLSelectElement;
  if (productColorSelect) {
    productColorSelect.innerHTML = '';
    for (const vid of product['v-ids']) {
      const colorVariant = product['vid_' + vid];
      productColorSelect.innerHTML += `<option value="${vid}">${colorVariant['v-name']}</option>`;
    }
    productColorSelect.value = vid;
    productColorSelect.addEventListener('change', () => {
      const productColorSelect = document.getElementById(
        'product-color',
      ) as HTMLSelectElement;
      loadProductImages(pid, productColorSelect.value);
      loadProductInfo(pid, productColorSelect.value);
    });
  }

  const productSizeSelect = document.getElementById(
    'product-size',
  ) as HTMLSelectElement;
  if (productSizeSelect) {
    productSizeSelect.innerHTML = '';
    for (const size of product['sizes']) {
      productSizeSelect.innerHTML += `<option value="${size}">${size}</option>`;
    }
  }

  const productDescriptionElement =
    document.getElementById('product-price-text');
  if (productDescriptionElement) {
    productDescriptionElement.textContent = `Cost: ${product['costs']}`;
  }
}

function addToCart() {
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const searchParams = url.searchParams;
  const productColorSelect = document.getElementById(
    'product-color',
  ) as HTMLSelectElement;

  const productSizeSelect = document.getElementById(
    'product-size',
  ) as HTMLSelectElement;

  const pid = searchParams.get('pid') ?? '001';
  const vid = productColorSelect.value ?? '01';
  const sid = productSizeSelect.value ?? 'M';

  storeToCart(pid, vid, sid);
}

type CartItem = {
  productId: string;
  variantId: string;
  sizeId: string;
  quantity: number;
};

function storeToCart(pid: string, vid: string, sid: string, qid = 1) {
  const cart = getCart();
  const existingItem = cart.find(
    (item: CartItem) =>
      item.productId === pid && item.variantId === vid && item.sizeId === sid,
  );

  if (existingItem) {
    existingItem.quantity += qid;
  } else {
    cart.push({
      productId: pid,
      variantId: vid,
      sizeId: sid,
      quantity: qid,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  showPopupCart();
  setCartSize();
}

function showPopupCart() {
  unhide_elem('popup');
  unhide_elem('overlay');

  setTimeout(function () {
    hide_elem('popup');
    hide_elem('overlay');
  }, 1500);
}
