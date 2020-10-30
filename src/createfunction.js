const addText = (parentElement, elementType, inputId, inputClass, text) => {
    const nodeType = document.createElement(elementType);
    const nodeText = document.createTextNode(text);
    if (inputId !== null) {
        nodeType.id = inputId;
    }
    if (inputClass !== null) {
        nodeType.className = inputClass
    }
    nodeType.appendChild(nodeText);
    parentElement.appendChild(nodeType);
}

const content = document.getElementById('content');
const container = document.createElement('div');
container.id = 'divContainer';
const cont = document.createElement('div')
cont.id = 'cont'

export { addText, content, container, cont };