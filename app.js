const newH1 = document.querySelector('h1');
const newButton = document.querySelector('button');


newButton.addEventListener('click', function () {
    const newColor = makeRandColor()
    document.body.style.backgroundColor = newColor;
    newH1.innerText = newColor;
})


const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}