import { addText, cont } from './createfunction';

const loadMainPage = () => {
    addText(cont, 'h2', null, null, "Fear The Cheese")
    addText(cont, 'p', null, null, "Future Burger is home of the Jucy Lucy - a burger that is so mouth wateringly delicious that's it's almost as though you were biting into pure flavor crystals.");
    const burgerImage = new Image();
    burgerImage.src = "burger.jpg";
    cont.appendChild(burgerImage);
}

export { loadMainPage };