import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

function getPokedex() {

    const stringyPokedex = localStorage.getItem(POKEDEX);

    if (!stringyPokedex) return [];

    const parsedPokedex = JSON.parse(stringyPokedex);

    return parsedPokedex;
}

export function encounterPokemon(poke) {

    const pokedex = getPokedex();

    const matched = findById(poke.id, pokedex);

    if (matched) {
        matched.encountered++;
    } else {
        const newPoke = {
            id: poke.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPoke);
    }

    setPokedex(pokedex);

    return pokedex;
}

function setPokedex(parsedPokedex) {

    const stringyPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(POKEDEX, stringyPokedex);
}