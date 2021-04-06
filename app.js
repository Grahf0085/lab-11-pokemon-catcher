// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { pickThreeRandomPokemon, displayPokemon } from './data-utils.js';
import { caughtPokemon, totalCaught } from './local-store.js';

const firstPokemon = document.getElementById('poke-one');
const secondPokemon = document.getElementById('poke-two');
const thirdPokemon = document.getElementById('poke-three');

const firstImage = document.getElementById('image-one');
const secondImage = document.getElementById('image-two');
const thirdImage = document.getElementById('image-three');

const pokeOneLabel = document.getElementById('poke-one-label');

const totalCaughtDisplay = document.getElementById('total-caught');
let pokemonList = displayPokemon();

let total = totalCaught();

firstImage.src = pokemonList[0].url_image;
secondImage.src = pokemonList[1].url_image;
thirdImage.src = pokemonList[2].url_image;

firstPokemon.addEventListener('click', () => {

    pokemonList = displayPokemon();
    caughtPokemon(pokemonList[0]);
    total = totalCaught();

    firstImage.src = pokemonList[0].url_image;
    secondImage.src = pokemonList[1].url_image;
    thirdImage.src = pokemonList[2].url_image;

    totalCaughtDisplay.textContent = total;

    if (total === 10) window.location = 'results.html';
});

secondPokemon.addEventListener('click', () => {

    pokemonList = displayPokemon();
    caughtPokemon(pokemonList[0]);
    total = totalCaught();

    firstImage.src = pokemonList[0].url_image;
    secondImage.src = pokemonList[1].url_image;
    thirdImage.src = pokemonList[2].url_image;

    totalCaughtDisplay.textContent = total;

    if (total === 10) window.location = 'results.html';
});

thirdPokemon.addEventListener('click', () => {

    pokemonList = displayPokemon();
    caughtPokemon(pokemonList[0]);
    total = totalCaught();

    firstImage.src = pokemonList[0].url_image;
    secondImage.src = pokemonList[1].url_image;
    thirdImage.src = pokemonList[2].url_image;

    totalCaughtDisplay.textContent = total;

    if (total === 10) window.location = 'results.html';
});

