var colors = ['pink','yellow','purple','black','grey'];
var currentColor = 0;

const changeColor = (element) =>{
    const random = Math.floor(Math.random() * colors.length);
    currentColor = colors[random];
    let items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.style.backgroundColor = currentColor;
    }
}
