
(async () => {

    const {blue} = require('ansi-colors')
    const {getPokemonByNumber, getRandomPokemon} = require('./pokemon')

    const names = require('./names.json')
    console.log(names)

    const bulbasaur = await getRandomPokemon()
    
    console.log(blue(bulbasaur.name))

})()
