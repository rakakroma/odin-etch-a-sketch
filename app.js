
const container = document.querySelector('#container')


for (let i = 0; i < 256; i++) {
    const createGridSquare = document.createElement('div')
    createGridSquare.className = 'grid-squares';
    container.appendChild(createGridSquare)
}

const gridSquares = document.querySelectorAll('.grid-squares')

gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', (e) => {
        e.target.classList.add('hovered')
        console.log(e.target);
    });
});



const range = document.querySelector('#range')
const createBubble = document.createElement('span');
const rangeDiv = document.querySelector('#range-div');

rangeDiv.appendChild(createBubble)

const bubble = document.querySelector('span')
bubble.textContent = '16 x 16'
range.addEventListener('input', () => {
    bubble.innerHTML = `${range.value} x ${range.value}`;
});

const setSquare = document.querySelector('#set-square')
const test = document.querySelector('.test')

setSquare.addEventListener('click', () => {
    container.innerHTML = '';
    for (let i = 0; i < range.value ** 2; i++) {
        const createGridSquare = document.createElement('div')
        createGridSquare.className = 'grid-squares';
        container.appendChild(createGridSquare);
    };
    const gridSquares = document.querySelectorAll('.grid-squares')
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', (e) => {
            e.target.classList.add('hovered')
            console.log(e.target);
        });
    });
    container.style["grid-template-columns"] = `repeat(${range.value}, 1fr)`;
    container.style["grid-template-rows"] = `repeat(${range.value}, 1fr)`;

})