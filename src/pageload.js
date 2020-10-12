import { addText } from './createfunction';

const loadPage = () => {
    const content = document.getElementById('content');
    addText('h1', 'Future Burger');

}

export { loadPage };