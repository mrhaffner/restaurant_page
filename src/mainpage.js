import { addText, content } from './createfunction';

const loadMainPage = () => {
    addText(content, 'p', "Future Burger is home of the Juicy Lucy - a burger that is so mouth wateringly delicious that's it's almost as though you were biting into pure flavor crystals.");
    const burgerImage = new Image();
    burgerImage.src = "burger.jpg";
    content.appendChild(burgerImage);
}

export { loadMainPage };

//add text about what a juicy lucy is, forefront of burger innovation