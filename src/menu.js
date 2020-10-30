import { addText, cont } from './createfunction';

const loadMenuPage = () => {
    addText(cont, 'h2', null, null, 'Menu');
    addText(cont, 'h3', null, null, 'Jucy Lucy Burgers');
    addText(cont, 'p', null, 'item', 'Ameriburger');
    addText(cont, 'p', null, null, 'A burger stuffed inside a burger');
    addText(cont, 'p', null, 'item', 'The Angry Goat');
    addText(cont, 'p', null, null, 'Creamy Goat Cheese explodes into your mouth with every bite ');
    addText(cont, 'p', null, 'item', 'Aspen Burger');
    addText(cont, 'p', null, null, 'Fried Egg on top of Guacamole - Cheddar Cheese in the middle');
    addText(cont, 'p', null, 'item', 'Bacon BBQ');
    addText(cont, 'p', null, null, 'Comes with Extra Bacon and more than enough Spice');
    addText(cont, 'h3', null, null, 'Sides');
    addText(cont, 'p', null, 'item', 'American Fries');
    addText(cont, 'p', null, null, 'Fried in lard, coated in salt - as it was meant to be');
    addText(cont, 'p', null, 'item', 'Sweet Potato Fries');
    addText(cont, 'p', null, null, 'The more colorful brother of the American Fries');
    addText(cont, 'h3', null, null, 'Beer');
    addText(cont, 'p', null, 'item', 'High Hops IPA');
    addText(cont, 'p', null, null, "More Hops? Less Hops? More!");
    addText(cont, 'p', null, 'item', 'Obscure Reference Lager');
    addText(cont, 'p', null, null, "It's definitely cooler if no one has heard of your favorite brew");
}

export { loadMenuPage };
