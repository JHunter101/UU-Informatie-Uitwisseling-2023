document.addEventListener('DOMContentLoaded', function () {
  setCartSize();
  const grid: HTMLElement | null = document.getElementById('grid-products');

  Object.entries(clothesData).forEach(([key, value]) => {
    value['v-ids'].forEach((vid: string) => {
      const product = document.createElement('div');
      product.classList.add('product');
      product.classList.add('grid-item');
      product.addEventListener('click', () => {
        const linkUrl = `./product.html?pid=${key}&vid=${vid}`;
        window.location.href = linkUrl;
      });

      const pImgBox = document.createElement('div');
      const pImg = document.createElement('img');
      pImgBox.classList.add('p-img');
      pImg.src = clothesData[key]['vid_' + vid]['image-front'];
      pImgBox.appendChild(pImg);
      product.appendChild(pImgBox);

      const pNameBox = document.createElement('div');
      const pName = document.createElement('h5');
      pNameBox.classList.add('p-name');
      pName.textContent = clothesData[key]['p-name'];
      pNameBox.appendChild(pName);
      product.appendChild(pNameBox);

      const pPriceBox = document.createElement('div');
      const pPrice = document.createElement('h5');
      pPriceBox.classList.add('p-price');
      pPrice.textContent = clothesData[key]['costs'];
      pPriceBox.appendChild(pPrice);
      product.appendChild(pPriceBox);

      if (grid) {
        grid.appendChild(product);
      }
    });
  });
});
