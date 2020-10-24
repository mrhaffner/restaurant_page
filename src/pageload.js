import { addText, content, container } from './createfunction';

const loadPage = () => {
    const navBar = document.createElement('ul');
    // navBar.id = nav_bar;
    content.appendChild(navBar);
    addText(navBar, 'li', 'home_btn', 'nav_btn', 'Home');
    addText(navBar, 'li', 'menu_btn', 'nav_btn', 'Menu');
    addText(navBar, 'li', 'contact_btn', 'nav_btn', 'Contact');
    // const headerDiv = document.createElement('div');
    // content.appendChild(headerDiv);
    // headerDiv.id = header_Div;
    const header = document.createElement('header');
    content.appendChild(header)
    addText(header, 'h1', null, null, 'Future Burger');
    content.appendChild(container);
    
}

export { loadPage };