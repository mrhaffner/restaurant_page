import { addText, content, container } from './createfunction';

const loadPage = () => {
    const navBar = document.createElement('ul');
    // navBar.id = nav_bar;
    content.appendChild(navBar);
    addText(navBar, 'li', 'homeBtn', 'navBtn', 'Home');
    addText(navBar, 'li', 'menuBtn', 'navBtn', 'Menu');
    addText(navBar, 'li', 'contactBtn', 'navBtn', 'Contact');
    addText(content, 'h1', null, null, 'Future Burger');
    content.appendChild(container);
}

export { loadPage };