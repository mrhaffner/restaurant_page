import { addText, content } from './createfunction';

const loadPage = () => {
    const navBar = document.createElement('ul');
    // navBar.id = nav_bar;
    content.appendChild(navBar);
    
    addText(navBar, 'li', null, null, 'Home');
    addText(navBar, 'li', null, null, 'Menu');
    addText(navBar, 'li', null, null, 'Contact');
    addText(content, 'h1', null, null, 'Future Burger');
}

export { loadPage };