import { addText, container } from './createfunction';

const loadContactPage = () => {
    addText(container, 'h2', null, null, 'Contact');
    addText(container, 'p', null, null, '612 Wharf Ave');
    addText(container, 'p', null, null, 'Burger Town, NY 12345');
    addText(container, 'p', null, null, '(784) 555-5555');
    addText(container, 'p', null, null, 'futureburger@fakemail.com');
}

export { loadContactPage };