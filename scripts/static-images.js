document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    if (!header) {
        console.error('Header element not found');
        return;
    }

    const images = [
        'images/waterkiwi.png',
        'images/classictea.png',
        'images/dragon.png',
        'images/strawberry.png',
        'images/cookie.png',
        'images/hibiscus.png',
        'images/purpledrizzle.png',
        'images/somethingfizzy.png',
        'images/taro.png',
        'images/waterkiwi.png',
    ]; // Add paths to your images here

    const rows = 4; // Number of rows
    const imagesPerRow = Math.ceil(header.clientWidth / (header.clientWidth / 10)); // Images per row

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const createStaticImage = (src, top, left) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('static-image');
        img.style.top = top;
        img.style.left = left;
        return img;
    };

    const previousImages = [];

    for (let row = 0; row < rows; row++) {
        let shuffledImages = shuffleArray(images.slice());

        for (let i = 0; i < imagesPerRow; i++) {
            let src = shuffledImages[i % images.length];
            
            // Ensure no two consecutive images are the same
            if (i > 0 && src === previousImages[i - 1]) {
                const swapIndex = (i + 1) % images.length;
                [shuffledImages[i], shuffledImages[swapIndex]] = [shuffledImages[swapIndex], shuffledImages[i]];
                src = shuffledImages[i % images.length];
            }
            
            const top = `${row * (100 / rows)}%`;
            const left = `${i * (100 / imagesPerRow)}%`;
            header.appendChild(createStaticImage(src, top, left));
            previousImages[i] = src;
        }
    }
});
