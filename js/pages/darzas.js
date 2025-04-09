const titleDOM = document.querySelector('title');
const h1DOM = document.querySelector('h1');
const pDOM = document.querySelector('p');

const originalTitle = titleDOM.textContent;
const newTitle = 'Zuikio darzas';
let increment = 0;

h1DOM.textContent = newTitle;

const timer = setInterval(() => {
    titleDOM.textContent =
        increment++ % 2 === 0
            ? `${newTitle} (${increment})`
            : `${originalTitle} (${increment})`;

    // Kaip sustabdyti esama laikrodi
    /* if (increment >= 10) {
        clearInterval(timer);
    } */
}, 1000);

let pTime = 0;

setInterval(() => {
    pDOM.textContent = pTime++ / 10 + 's';
    /* pDOM.style.fontSize = pTime / 10 + 'rem'; */
}, 100);

const vegetables = ['pomidoras', 'agurkas', 'svogunas', 'bulve'];
const vegsDOM = document.querySelector('.vegs');
let vegsHTML = '';

for (const veg of vegetables) {
    vegsHTML += `<li>${veg}<li>`;
}

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const namesDOM = document.querySelector('.names');

for (const name of names) {
    namesDOM.insertAdjacentHTML('beforeend', `<li>${name}</li>`);
}

const fonts = ['Arial', 'Verdana', 'Tahoma', 'cursive', 'sans-serif'];
const fontsDOM = document.querySelector('.fonts');

for (const font of fonts) {
    const HTML = `<li style="font-family: cursive;">${font}</li>`;
    fontsDOM.insertAdjacentHTML('beforeend', HTML);
}
