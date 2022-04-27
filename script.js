const palleteContainer = document.getElementById('palleteContainer');
const colorRange = document.getElementById('colorRange');
const colorValues = [['1','2','3','4','5'],['6','7','8','9','A'],['B','C','D','E','F']];
const PALLETE_SIZE = 5;
const body = document.getElementById('body');

const createPallete = () => {
    palleteContainer.innerHTML = '';
    for(let i = 0; i < PALLETE_SIZE; i++) {
        const palleteElement = document.createElement('div');
        palleteElement.classList.add('palleteItem');
        palleteContainer.appendChild(palleteElement);
    }
    updatePallete();
}

const colorize = (element,saturacion,saturacionDos,rgb) => {
    let color = '#';
    for(let i = 0; i < 3; i++) {
        if(rgb===i){
            console.log(rgb+':'+saturacionDos);
            const randomElement = colorValues[saturacionDos][Math.floor(Math.random()*5)];
            color += randomElement;
        } else {
            const randomElement = colorValues[saturacion][Math.floor(Math.random()*5)];
            color += randomElement;
        }
    };
    element.style.backgroundColor = color; 
    element.innerHTML = `<span class='colorHex'>${color}</span>`;
    body.style.background = 'linear-gradient('+color+',#888)';
}

const updatePallete = () => {
    let saturacion = Math.floor(Math.random()*3);
    let saturacionDos = Math.floor(Math.random()*3);
    let rgb = Math.floor(Math.random()*3);
    for (let i = 0; i < palleteContainer.children.length; i++) {
        colorize(palleteContainer.children[i],saturacion,saturacionDos,rgb)
    }
};

createPallete();