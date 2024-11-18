

const numPokemon = 1025
const fetch = require('node-fetch')

const getRandomPokemon = async () => {
    const rand = Math.floor(Math.random() * numPokemon) + 1
    return await getPokemonByNumber(rand)
}

const getPokemonByNumber = async number => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    return await request.json()
}

module.exports = {getRandomPokemon, getPokemonByNumber}