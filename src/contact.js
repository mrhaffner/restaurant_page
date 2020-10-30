import { addText, cont } from './createfunction';

const loadContactPage = () => {
    addText(cont, 'h2', null, null, 'Contact');
    addText(cont, 'p', null, 'p_top', '612 Wharf Ave.');
    addText(cont, 'p', null, null, 'Burger Town, NY 12345');
    addText(cont, 'p', null, null, '(784) 555-5555');
    addText(cont, 'p', null, null, 'futureburger@sharklasers.com');
}

export { loadContactPage };