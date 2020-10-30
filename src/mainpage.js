import { addText, cont } from './createfunction';

const loadMainPage = () => {
    addText(cont, 'h2', null, null, "Fear The Cheese")
    addText(cont, 'p', null, 'p_top', "Future Burger is home of the Jucy Lucy - a burger that is so mouth wateringly delicious that it's almost as though you were biting into pure flavor crystals.");
    addText(cont, 'p', null, null, `Remember, if your Jucy Lucy has an "i" in its name - well, you're just not eating the real thing.`);
    const burgerImage = new Image();
    burgerImage.src = "lucy.png";
    cont.appendChild(burgerImage);
}

export { loadMainPage };