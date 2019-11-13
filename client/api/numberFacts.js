import request from 'superagent'

export function getNumberFact(number){
  return request
  .get('http://numbersapi.com/' + number)
  .then(res => res.text)
}