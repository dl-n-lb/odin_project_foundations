let container = document.getElementById("container");

const modes = ['grayscale', 'rgb', 'color-pick'];
let mode = 1;
let color = '000000';

const generateSquares = function(c, rows) {
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < rows*rows; i++) {  
        let div = document.createElement('div');
        div.classList.add('grid-pixel');
        c.appendChild(div);
    }
    formatSquares();
}

const removeSquares = function(c) {
    let children = c.children;
    while (children.length > 0) {
        c.removeChild(children[0]);
    }
}

const formatSquares = function() {
    let pixels = document.getElementsByClassName('grid-pixel');
    for (let i = 0; i < pixels.length; ++i) {
        pixels[i].addEventListener('mouseover', (e) => {
            let col;
            switch (mode) {
                case 0:
                    col = '2E2E2F';
                    break;
                case 1:
                    col = Math.floor(Math.random() * 0xFFFFFF).toString(16);
                    break;
                case 2:
                    col = color;
                    break;
                default:
                    break;
            }
            pixels[i].style.backgroundColor = '#'+col; 
        });
    }
}

let btn = document.getElementById('change-grid-size-button');
btn.addEventListener('click', (e) => {
    let newsize = 0;
    while (newsize < 1 || newsize > 200) newsize = parseInt(prompt("Enter new grid size (1-200)"));
    removeSquares(container);
    generateSquares(container, newsize);
});

let colBtns = document.getElementsByClassName('set-color');
for (let i = 0; i < colBtns.length; ++i) {
    colBtns[i].addEventListener('click', (e) => {
        mode = modes.indexOf(colBtns[i].id);
    });
    colBtns[i].addEventListener('change', (e) => {
        color = e.target.value.slice(1);
    });
}

generateSquares(container, 16);
