import { addText, content } from './createfunction';

const loadMenuPage = () => {
    addText(content, 'h2', 'Menu');
    addText(content, 'h3', 'Burgers');
    addText(content, 'p', 'Ameriburger');
    addText(content, 'p', 'A burger stuffed inside a burger');
    addText(content, 'p', 'The Angry Goat');
    addText(content, 'p', 'Creamy Goat Cheese explodes into your mouth with every bite ');
    addText(content, 'p', 'Aspen Burger');
    addText(content, 'p', 'Fried Egg on top of Guacamole - Cheddar Cheese in the middle');
    addText(content, 'p', 'Bacon BBQ');
    addText(content, 'p', 'Comes with Extra Bacon and more than enough Spice');
    addText(content, 'h3', 'Sides');
    addText(content, 'p', 'American Fries');
    addText(content, 'p', 'Fried in lard, coated in salt - as it was meant to be');
    addText(content, 'p', 'Sweet Potato Fries');
    addText(content, 'p', 'The more colorful brother of the American Fries');
    addText(content, 'h3', 'Beer');
    addText(content, 'p', 'High Hops IPA');
    addText(content, 'p', "This microbrew's hops content is out of this world");
    addText(content, 'p', 'Obscure Reference Lager');
    addText(content, 'p', "It's definitely cooler if no one has heard of your favorite brew");
}

export { loadMenuPage };
