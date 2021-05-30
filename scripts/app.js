const btn = document.getElementById('changeButton');
const header = document.getElementById('header');

const images = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','bg6.jpg','bg7.jpg','bg8.jpg','bg9.jpg','bg10.jpg','bg11.jpg','bg12.jpg','bg13.jpg','bg14.jpg','bg15.jpg','bg16.jpg'];
let random
let actualBackground;
backgroundChange = () => {

    random = Math.floor(Math.random() * images.length);
    header.style.backgroundImage = 'url(images/'+ images[random] + ')';

}

btn.addEventListener('click', backgroundChange);