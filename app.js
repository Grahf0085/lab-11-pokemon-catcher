// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { pickThreeRandomPokemon } from './data-utils.js';

const firstPokemon = document.getElementById('poke-one');
const secondPokemon = document.getElementById('poke-two');
const thirdPokemon = document.getElementById('poke-three');

const firstImage = document.getElementById('image-one');
const secondImage = document.getElementById('image-two');
const thirdImage = document.getElementById('image-three');

const button = document.querySelector('button');

const totalCaught = document.getElementById('total-caught');
let total = 0;

function displayPokemon() {
    const pokemonList = pickThreeRandomPokemon();

    firstImage.src = pokemonList[0].url_image;
    secondImage.src = pokemonList[1].url_image;
    thirdImage.src = pokemonList[2].url_image;
}

displayPokemon();

button.addEventListener('click', () => {
});

firstPokemon.addEventListener('click', () => {
    totalCaught.textContent = ++total;
    displayPokemon();
});

secondPokemon.addEventListener('click', () => {
    totalCaught.textContent = ++total;
    displayPokemon();
});

thirdPokemon.addEventListener('click', () => {
    totalCaught.textContent = ++total;
    displayPokemon();
});

