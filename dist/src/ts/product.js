"use strict";
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
    }
    else {
        window.location.href = './';
    }
});
function loadProductImages(pid, vid) {
    const productImages = document.getElementById('product-images');
    if (productImages) {
        productImages.innerHTML = '';
        ['image-front', 'image-back', 'image-extra', 'image-worn'].forEach((imageType) => {
            const pImgBox = document.createElement('div');
            const pImg = document.createElement('img');
            pImgBox.classList.add('p-img');
            pImg.src = clothesData[pid]['vid_' + vid][imageType];
            pImgBox.appendChild(pImg);
            productImages.appendChild(pImgBox);
        });
    }
}
function loadProductInfo(pid, vid) {
    const product = clothesData[pid];
    const variant = product['vid_' + vid];
    const productNameElement = document.getElementById('product-name');
    if (productNameElement) {
        productNameElement.textContent = product['p-name'];
    }
    const productColorSelect = document.getElementById('product-color');
    if (productColorSelect) {
        productColorSelect.innerHTML = '';
        for (const vid of product['v-ids']) {
            const colorVariant = product['vid_' + vid];
            productColorSelect.innerHTML += `<option value="${vid}">${colorVariant['v-name']}</option>`;
        }
        productColorSelect.value = vid;
        productColorSelect.addEventListener('change', () => {
            const productColorSelect = document.getElementById('product-color');
            loadProductImages(pid, productColorSelect.value);
            loadProductInfo(pid, productColorSelect.value);
        });
    }
    const productSizeSelect = document.getElementById('product-size');
    if (productSizeSelect) {
        productSizeSelect.innerHTML = '';
        for (const size of product['sizes']) {
            productSizeSelect.innerHTML += `<option value="${size}">${size}</option>`;
        }
    }
    const productDescriptionElement = document.getElementById('product-price-text');
    if (productDescriptionElement) {
        productDescriptionElement.textContent = `Cost: ${product['costs']}`;
    }
}
function addToCart() {
    var _a, _b, _c;
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const searchParams = url.searchParams;
    const productColorSelect = document.getElementById('product-color');
    const productSizeSelect = document.getElementById('product-size');
    const pid = (_a = searchParams.get('pid')) !== null && _a !== void 0 ? _a : '001';
    const vid = (_b = productColorSelect.value) !== null && _b !== void 0 ? _b : '01';
    const sid = (_c = productSizeSelect.value) !== null && _c !== void 0 ? _c : 'M';
    storeToCart(pid, vid, sid);
}
function storeToCart(pid, vid, sid, qid = 1) {
    const cart = getCart();
    const existingItem = cart.find((item) => item.productId === pid && item.variantId === vid && item.sizeId === sid);
    if (existingItem) {
        existingItem.quantity += qid;
    }
    else {
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
