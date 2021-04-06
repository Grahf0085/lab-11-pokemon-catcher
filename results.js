import { getPokedex } from './local-store.js';

const pokemonList = getPokedex();
// const table = document.querySelector('table');
const button = document.querySelector('button');

const namesList = [];
const encounteredList = [];
const capturedList = [];

for (let pokemon of pokemonList) {
    namesList.push(pokemon.id);
    encounteredList.push(pokemon.encountered);
    capturedList.push(pokemon.captured);
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
        }]
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

