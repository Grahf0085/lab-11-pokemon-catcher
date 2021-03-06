import { getPokedex } from './local-store.js';
import pokemonArray from './pokemon.js';

const pokemonList = getPokedex();
// const table = document.querySelector('table');
const button = document.querySelector('button');

const namesList = [];
const encounteredList = [];
const capturedList = [];
const capturedNamedList = [];
let typeArray = [
    { grass: 0 },
    { fire: 0 },
    { water: 0 },
    { bug: 0 },
    { normal: 0 }
];
const nameTypeList = ['grass', 'fire', 'water', 'bug', 'normal'];

for (let pokemon of pokemonList) {
    namesList.push(pokemon.id);
    encounteredList.push(pokemon.encountered);
    capturedList.push(pokemon.captured);
}

for (let pokemon of pokemonList) {
    if (pokemon.captured === 1) {
        capturedNamedList.push(pokemon.id);
    }
    if (pokemon.captured === 2) {
        capturedNamedList.push(pokemon.id);
        capturedNamedList.push(pokemon.id);
    }
    if (pokemon.captured === 3) {
        capturedNamedList.push(pokemon.id);
        capturedNamedList.push(pokemon.id);
        capturedNamedList.push(pokemon.id);
    }
    if (pokemon.captured === 4) {
        capturedNamedList.push(pokemon.id);
        capturedNamedList.push(pokemon.id);
        capturedNamedList.push(pokemon.id);
        capturedNamedList.push(pokemon.id);
    }
}

console.log(capturedNamedList);

for (let pokemon of pokemonArray) {
    for (let captured of capturedNamedList) {
        if (pokemon.pokemon === captured) {
            if (pokemon.type_1 === 'grass') {
                typeArray[0].grass++;
            } else if (pokemon.type_1 === 'fire') {
                typeArray[1].fire++;
            } else if (pokemon.type_1 === 'water') {
                typeArray[2].water++;
            } else if (pokemon.type_1 === 'bug') {
                typeArray[3].bug++;
            } else typeArray[4].normal++;
        }
    }
}

/* export function renderLinePokemon(pokemon) {

    const newTr = document.createElement('tr');
    const tName = document.createElement('td');
    const tEncountered = document.createElement('td');
    const tCaptured = document.createElement('td');
    const tGotAway = document.createElement('td');

    tName.textContent = pokemon.id;
    tEncountered.textContent = pokemon.encountered;
    tCaptured.textContent = pokemon.captured;
    tGotAway.textContent = pokemon.encountered - pokemon.captured;
    newTr.append(tName, tEncountered, tCaptured, tGotAway);

    return newTr;

}

for (let pokemon of pokemonList) {
    const tr = renderLinePokemon(pokemon);

    table.append(tr);
}
*/

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: namesList,
        datasets: [{
            label: 'Captured',
            data: capturedList,
            backgroundColor: 'lightgreen',
            borderColor: 'black',
            borderWidth: 1
        },
        {
            label: 'Encountered',
            data: encounteredList,
            backgroundColor: 'lightblue',
            borderColor: 'black',
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('mySecondChart').getContext('2d'); //eslint-disable-line
var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: nameTypeList,
        datasets: [{
            label: 'grass',
            data: typeArray[0],
            backgroundColor: 'grey',
            borderColor: 'black',
            borderWidth: 1
        },
        {
            label: 'fire',
            data: typeArray[1],
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 1
        },
        {
            label: 'water',
            data: typeArray[2],
            backgroundColor: 'yellow',
            borderColor: 'black',
            borderWidth: 1
        },
        {
            label: 'bug',
            data: typeArray[3],
            backgroundColor: 'orange',
            borderColor: 'black',
            borderWidth: 1
        },
        {
            label: 'normal',
            data: typeArray[4],
            backgroundColor: 'blue',
            borderColor: 'black',
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

button.addEventListener('click', () => {

    localStorage.clear();

    window.location = 'index.html';
});

