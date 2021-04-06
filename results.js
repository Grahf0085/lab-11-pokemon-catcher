import { getPokedex, totalCaught, totalEncountered, encounterPokemon } from './local-store.js';

const pokemonList = getPokedex();
const table = document.querySelector('table');


export function renderLinePokemon(pokemon) {

    const newTr = document.createElement('tr');
    const tName = document.createElement('td');
    const tEncountered = document.createElement('td');
    const tCaptured = document.createElement('td');
    const tGotAway = document.createElement('td');

    console.log(pokemon);

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

