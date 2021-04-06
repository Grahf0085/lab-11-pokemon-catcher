import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokedex() {

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

export function caughtPokemon(poke) {

    const pokedex = getPokedex();

    const matched = findById(poke.id, pokedex);

    if (matched) {
        matched.captured++;
        matched.encountered++;
    } else {
        const newPoke = {
            id: poke.pokemon,
            captured: 1,
            encountered: 1
        };

        pokedex.push(newPoke);
    }

    setPokedex(pokedex);

    return pokedex;
}

export function totalCaught() {

    const pokedex = getPokedex();
    let total = 0;

    for (let pokemon of pokedex) {
        total += pokemon.captured;
    }
    return total;
}

export function totalEncountered() {

    const pokedex = getPokedex();
    let total = 0;

    for (let pokemon of pokedex) {
        total += pokemon.encountered;
    }
    return total;
}
