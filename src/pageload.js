const loadPage = () => {
    const content = document.getElementById('content');
    
    const titleNode = document.createElement('h1');
    const titleText = document.createTextNode('Future Burger');
    titleNode.appendChild(titleText);
    content.appendChild(titleNode);

    const burgerTxtNode = document.createElement('p');
    const burgerTxtNodeTxt = document.createTextNode("Future Burger is home of the Juicy Lucy - a burger that is so mouth wateringly delicious that's it's almost as though you were biting into pure flavor crystals.");
    burgerTxtNode.appendChild(burgerTxtNodeTxt);
    content.appendChild(burgerTxtNode);

    //maybe make a function for appending text nodes

    const burgerImage = new Image();
    burgerImage.src = "burger.jpg";
    content.appendChild(burgerImage);
}

export { loadPage };