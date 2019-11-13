import request from 'superagent'

const pokeBase = 'https://pokeapi.co/api/v2/'

export function getCharmander () {
    return request
    .get(pokeBase + 'pokemon/4/')
    .then(res => res.body)
}