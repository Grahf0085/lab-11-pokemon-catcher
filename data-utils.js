import pokemonList from './pokemon.js';
import { encounterPokemon } from './local-store.js';

function getRandomIndex() {
    return Math.floor(Math.random() * pokemonList.length);
}

export function pickThreeRandomPokemon() {

    let firstNumber = getRandomIndex();
    let secondNumber = getRandomIndex();
    let thirdNumber = getRandomIndex();

    while (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
        firstNumber = getRandomIndex();
        secondNumber = getRandomIndex();
        thirdNumber = getRandomIndex();
    }

    const pokemonOne = pokemonList[firstNumber];
    const pokemonTwo = pokemonList[secondNumber];
    const pokemonThree = pokemonList[thirdNumber];

    encounterPokemon(pokemonOne);
    encounterPokemon(pokemonTwo);
    encounterPokemon(pokemonThree);

    return [pokemonOne, pokemonTwo, pokemonThree];
}

export function displayPokemon() {
    const pokemonList = pickThreeRandomPokemon();

    return pokemonList;
}

