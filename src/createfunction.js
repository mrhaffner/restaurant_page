const addText = (elementType, text) => {
    const nodeType = document.createElement(elementType);
    const nodeText = document.createTextNode(text);
    nodeType.appendChild(nodeText);
    content.appendChild(nodeType);
}

export { addText };