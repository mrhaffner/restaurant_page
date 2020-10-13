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

export { addText, content, container };

// add class and id ability (can use an if statement if you don't incldue one or just type 'n' for not included)