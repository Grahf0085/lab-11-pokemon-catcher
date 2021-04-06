// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { displayPokemon } from './data-utils.js';
import { caughtPokemon, getPokedex, totalCaught, } from './local-store.js';
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

let totalCaptured = totalCaught();

firstImage.src = pokemonList[0].url_image;
secondImage.src = pokemonList[1].url_image;
thirdImage.src = pokemonList[2].url_image;


firstPokemon.addEventListener('click', () => {

    pokemonList = displayPokemon();
    caughtPokemon(pokemonList[0]);
    totalCaptured = totalCaught();

    firstImage.src = pokemonList[0].url_image;
    secondImage.src = pokemonList[1].url_image;
    thirdImage.src = pokemonList[2].url_image;

    totalCaughtDisplay.textContent = totalCaptured;

    let currentPoke = getPokedex();
    let matched = findById(pokemonList[0].pokemon, currentPoke);

    if (matched) {
        capturesOne.textContent = matched.captured;
        encountersOne.textContent = matched.encountered;
    }

    if (totalCaptured === 10) {

        window.location = 'results.html';

    }
});

secondPokemon.addEventListener('click', () => {

    pokemonList = displayPokemon();
    caughtPokemon(pokemonList[0]);
    totalCaptured = totalCaught();

    firstImage.src = pokemonList[0].url_image;
    secondImage.src = pokemonList[1].url_image;
    thirdImage.src = pokemonList[2].url_image;

    totalCaughtDisplay.textContent = totalCaptured;

    let currentPoke = getPokedex();
    let matched = findById(pokemonList[1].pokemon, currentPoke);

    if (matched) {
        capturesTwo.textContent = matched.captured;
        encountersTwo.textContent = matched.encountered;
    }

    if (totalCaptured === 10) {

        window.location = 'results.html';

    }

    if (totalCaptured === 10) {

        window.location = 'results.html';

    }
});

thirdPokemon.addEventListener('click', () => {

    pokemonList = displayPokemon();
    caughtPokemon(pokemonList[0]);
    totalCaptured = totalCaught();

    firstImage.src = pokemonList[0].url_image;
    secondImage.src = pokemonList[1].url_image;
    thirdImage.src = pokemonList[2].url_image;

    totalCaughtDisplay.textContent = totalCaptured;

    let currentPoke = getPokedex();
    let matched = findById(pokemonList[2].pokemon, currentPoke);

    if (matched) {
        capturesThree.textContent = matched.captured;
        encountersThree.textContent = matched.encountered;
    }

    if (totalCaptured === 10) {

        window.location = 'results.html';

    }

    if (totalCaptured === 10) {

        window.location = 'results.html';

    }
});