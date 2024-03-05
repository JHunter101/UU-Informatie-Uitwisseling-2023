"use strict";
document.addEventListener('DOMContentLoaded', function () {
    setCartSize();
    recommendRandom(8);
});
function recommendRandom(amount = 8) {
    while (amount > 1) {
        Object.entries(clothesData).forEach(([pid, pidItem]) => {
            if (amount <= 0) {
                return;
            }
            pidItem['v-ids'].forEach((vid) => {
                if (amount <= 0) {
                    return;
                }
                if (Math.random() < 0.2) {
                    const imageBox = document.getElementById('rec-' + amount);
                    imageBox.innerHTML = '';
                    const image = document.createElement('img');
                    const imageTypes = [
                        'image-front',
                        'image-back',
                        'image-extra',
                        'image-worn',
                    ];
                    const imageType = randItem(imageTypes);
                    image.src = clothesData[pid]['vid_' + vid][imageType];
                    imageBox.appendChild(image);
                    imageBox.addEventListener('click', () => {
                        const linkUrl = `./product.html?pid=${pid}&vid=${vid}`;
                        window.location.href = linkUrl;
                    });
                    amount -= 1;
                }
            });
        });
    }
}
