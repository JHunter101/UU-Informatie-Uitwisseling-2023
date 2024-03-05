"use strict";
document.addEventListener('DOMContentLoaded', function () {
    setCartSize();
});
function getCart() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}
function wipeCart() {
    localStorage.removeItem('cart');
}
function setCartSize() {
    const cartSizeText = document.getElementById('cart-size');
    let cartSize = 0;
    getCart().forEach((cartItem) => {
        cartSize += cartItem.quantity;
    });
    cartSizeText.textContent = cartSize.toString();
}
const clothesData = {
    '001': {
        'p-name': 'T-Shirt',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        'v-ids': ['01', '02'],
        costs: '\u00a339.90',
        vid_01: {
            'v-name': 'Black',
            'image-front': 'res/clothes/00101-front.webp',
            'image-back': 'res/clothes/00101-back.webp',
            'image-extra': 'res/clothes/00101-extra.webp',
            'image-worn': 'res/clothes/00101-worn.webp',
        },
        vid_02: {
            'v-name': 'Creme',
            'image-front': 'res/clothes/00102-front.webp',
            'image-back': 'res/clothes/00102-back.webp',
            'image-extra': 'res/clothes/00102-extra.webp',
            'image-worn': 'res/clothes/00102-worn.webp',
        },
    },
    '002': {
        'p-name': 'Denim Jacket',
        sizes: ['S', 'M', 'L', 'XL', ' XXL'],
        'v-ids': ['01'],
        costs: '\u00a3119.90',
        vid_01: {
            'v-name': 'Black',
            'image-front': 'res/clothes/00201-front.webp',
            'image-back': 'res/clothes/00201-back.webp',
            'image-extra': 'res/clothes/00201-extra.webp',
            'image-worn': 'res/clothes/00201-worn.webp',
        },
    },
    '003': {
        'p-name': 'Jacket',
        sizes: ['S', 'M', 'L', 'XL', ' XXL'],
        'v-ids': ['01', '02', '03', '04'],
        costs: '\u00a3149.90',
        vid_01: {
            'v-name': 'Red',
            'image-front': 'res/clothes/00301-front.webp',
            'image-back': 'res/clothes/00301-back.webp',
            'image-extra': 'res/clothes/00301-extra.webp',
            'image-worn': 'res/clothes/00301-worn.webp',
        },
        vid_02: {
            'v-name': 'Blue',
            'image-front': 'res/clothes/00302-front.webp',
            'image-back': 'res/clothes/00302-back.webp',
            'image-extra': 'res/clothes/00302-extra.webp',
            'image-worn': 'res/clothes/00302-worn.webp',
        },
        vid_03: {
            'v-name': 'Green',
            'image-front': 'res/clothes/00303-front.webp',
            'image-back': 'res/clothes/00303-back.webp',
            'image-extra': 'res/clothes/00303-extra.webp',
            'image-worn': 'res/clothes/00303-worn.webp',
        },
        vid_04: {
            'v-name': 'Creme',
            'image-front': 'res/clothes/00304-front.webp',
            'image-back': 'res/clothes/00304-back.webp',
            'image-extra': 'res/clothes/00304-extra.webp',
            'image-worn': 'res/clothes/00304-worn.webp',
        },
    },
    '004': {
        'p-name': 'Jogging Pants',
        sizes: [
            '28-30',
            '30-32',
            '32-34',
            '34-36',
            '36-38',
            '40-44',
            '46-50',
            '52-54',
            '56-60',
            '62-64',
        ],
        'v-ids': ['01', '02', '03'],
        costs: '\u00a379.90',
        vid_01: {
            'v-name': 'Black',
            'image-front': 'res/clothes/00401-front.webp',
            'image-back': 'res/clothes/00401-back.webp',
            'image-extra': 'res/clothes/00401-extra.webp',
            'image-worn': 'res/clothes/00401-worn.webp',
        },
        vid_02: {
            'v-name': 'White',
            'image-front': 'res/clothes/00402-front.webp',
            'image-back': 'res/clothes/00402-back.webp',
            'image-extra': 'res/clothes/00402-extra.webp',
            'image-worn': 'res/clothes/00402-worn.webp',
        },
        vid_03: {
            'v-name': 'Creme',
            'image-front': 'res/clothes/00403-front.webp',
            'image-back': 'res/clothes/00403-back.webp',
            'image-extra': 'res/clothes/00403-extra.webp',
            'image-worn': 'res/clothes/00403-worn.webp',
        },
    },
    '005': {
        'p-name': 'Cargo Pants',
        sizes: [
            '28-30',
            '30-32',
            '32-34',
            '34-36',
            '36-38',
            '40-44',
            '46-50',
            '52-54',
            '56-60',
            '62-64',
        ],
        'v-ids': ['01', '02'],
        costs: '\u00a359.90',
        vid_01: {
            'v-name': 'Black',
            'image-front': 'res/clothes/00501-front.webp',
            'image-back': 'res/clothes/00501-back.webp',
            'image-extra': 'res/clothes/00501-extra.webp',
            'image-worn': 'res/clothes/00501-worn.webp',
        },
        vid_02: {
            'v-name': 'Creme',
            'image-front': 'res/clothes/00502-front.webp',
            'image-back': 'res/clothes/00502-back.webp',
            'image-extra': 'res/clothes/00502-extra.webp',
            'image-worn': 'res/clothes/00502-worn.webp',
        },
    },
};
