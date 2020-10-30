import { addText, content, container, cont } from './createfunction';

const loadPage = () => {
    const navBar = document.createElement('ul');
    content.appendChild(navBar);
    addText(navBar, 'li', 'home_btn', 'nav_btn', 'Home');
    addText(navBar, 'li', 'menu_btn', 'nav_btn', 'Menu');
    addText(navBar, 'li', 'contact_btn', 'nav_btn', 'Contact');
    const header = document.createElement('header');
    content.appendChild(header)
    addText(header, 'h1', 'logo', null, 'Future Burger');
    content.appendChild(container);
    container.appendChild(cont)
}

export { loadPage };