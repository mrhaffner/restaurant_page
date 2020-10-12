import { addText } from './createfunction';

const loadMainPage = () => {
    const content = document.getElementById('content');
    addText('p', "Future Burger is home of the Juicy Lucy - a burger that is so mouth wateringly delicious that's it's almost as though you were biting into pure flavor crystals.");
    const burgerImage = new Image();
    burgerImage.src = "burger.jpg";
    content.appendChild(burgerImage);
}

export { loadMainPage };