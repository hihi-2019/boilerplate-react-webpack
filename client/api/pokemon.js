import request from 'superagent'

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'

const randomNum = () => Math.floor(Math.random() *900)


export function getPokemon() {
  return request.get(pokemonUrl + randomNum())
  .then(res => res.body);
}