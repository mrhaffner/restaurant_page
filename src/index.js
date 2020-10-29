import { container } from './createfunction';
import { loadPage } from './pageload';
import { loadMainPage } from './mainpage';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact';
loadPage();

function clearContainer() {    
    while(cont.firstChild){
    cont.removeChild(cont.firstChild);
};

}

const homeBtn = document.getElementById('home_btn')
homeBtn.addEventListener('click', () => {
    clearContainer();
    loadMainPage();
});
const menuBtn = document.getElementById('menu_btn')
menuBtn.addEventListener('click', () => {
    clearContainer();
    loadMenuPage();
});
const contactBtn = document.getElementById('contact_btn')
contactBtn.addEventListener('click', () => {
    clearContainer();
    loadContactPage();
});

loadMainPage();