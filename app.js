// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { displayPokemon } from './data-utils.js';
import { caughtPokemon, getPokedex, getCaptured, getEncountered } from './local-store.js';
import { findById } from './utils.js';

const firstPokemon = document.getElementById('poke-one');
const secondPokemon = document.getElementById('poke-two');
const thirdPokemon = document.getElementById('poke-three');

const firstImage = document.getElementById('image-one');
const secondImage = document.getElementById('image-two');
const thirdImage = document.getElementById('image-three');

const capturesOne = document.getElementById('captures-one');
const encountersOne = document.getElementById('encounters-one');
const capturesTwo = document.getElementById('captures-two');
const encountersTwo = document.getElementById('encounters-two');
const capturesThree = document.getElementById('captures-three');
const encountersThree = document.getElementById('encounters-three');

const totalCaughtDisplay = document.getElementById('total-caught');
let pokemonList = displayPokemon();

let totalCaptured = 0;

let pokedex = getPokedex();
let matchedOne = findById(pokemonList[0].pokemon, pokedex);
let matchedTwo = findById(pokemonList[1].pokemon, pokedex);
let matchedThree = findById(pokemonList[2].pokemon, pokedex);

capturesOne.textContent = matchedOne.captured;
encountersOne.textContent = matchedOne.encountered;
capturesTwo.textContent = matchedTwo.captured;
encountersTwo.textContent = matchedTwo.encountered;
capturesThree.textContent = matchedThree.captured;
encountersThree.textContent = matchedThree.encountered;

firstImage.src = pokemonList[0].url_image;
secondImage.src = pokemonList[1].url_image;
thirdImage.src = pokemonList[2].url_image;


firstPokemon.addEventListener('click', () => {
    caughtPokemon(pokemonList[0]);
    pokedex = getPokedex();

    totalCaptured++;
    totalCaughtDisplay.textContent = totalCaptured;

    if (totalCaptured === 10) {

        window.location = 'results.html';

    }

    pokemonList = displayPokemon();
    firstImage.src = pokemonList[0].url_image;
    secondImage.src = pokemonList[1].url_image;
    thirdImage.src = pokemonList[2].url_image;

    capturesOne.textContent = getCaptured(pokemonList[0]);
    encountersOne.textContent = getEncountered(pokemonList[0]);
    capturesTwo.textContent = getCaptured(pokemonList[1]);
    encountersTwo.textContent = getEncountered(pokemonList[1]);
    capturesThree.textContent = getCaptured(pokemonList[2]);
    encountersThree.textContent = getEncountered(pokemonList[2]);
});

secondPokemon.addEventListener('click', () => {

    caughtPokemon(pokemonList[1]);
    pokedex = getPokedex();

    totalCaptured++;
    totalCaughtDisplay.textContent = totalCaptured;

    if (totalCaptured === 10) {

        window.location = 'results.html';

    }

    pokemonList = displayPokemon();
    firstImage.src = pokemonList[0].url_image;
    secondImage.src = pokemonList[1].url_image;
    thirdImage.src = pokemonList[2].url_image;

    capturesOne.textContent = getCaptured(pokemonList[0]);
    encountersOne.textContent = getEncountered(pokemonList[0]);
    capturesTwo.textContent = getCaptured(pokemonList[1]);
    encountersTwo.textContent = getEncountered(pokemonList[1]);
    capturesThree.textContent = getCaptured(pokemonList[2]);
    encountersThree.textContent = getEncountered(pokemonList[2]);

});

thirdPokemon.addEventListener('click', () => {

    caughtPokemon(pokemonList[2]);
    pokedex = getPokedex();

    totalCaptured++;
    totalCaughtDisplay.textContent = totalCaptured;

    if (totalCaptured === 10) {

        window.location = 'results.html';

    }

    pokemonList = displayPokemon();
    firstImage.src = pokemonList[0].url_image;
    secondImage.src = pokemonList[1].url_image;
    thirdImage.src = pokemonList[2].url_image;

    capturesOne.textContent = getCaptured(pokemonList[0]);
    encountersOne.textContent = getEncountered(pokemonList[0]);
    capturesTwo.textContent = getCaptured(pokemonList[1]);
    encountersTwo.textContent = getEncountered(pokemonList[1]);
    capturesThree.textContent = getCaptured(pokemonList[2]);
    encountersThree.textContent = getEncountered(pokemonList[2]);
});