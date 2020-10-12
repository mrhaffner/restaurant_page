import { addText, content } from './createfunction';

const loadContactPage = () => {
    addText(content, 'h2', 'Contact');
    addText(content, 'p', '612 Wharf Ave');
    addText(content, 'p', 'Burger Town, NY 12345');
    addText(content, 'p', '(784) 555-5555');
    addText(content, 'p', 'futureburger@fakemail.com');
}

export { loadContactPage };