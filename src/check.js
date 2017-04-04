import _map from 'lodash/map'
import foo from 'src/exchange'

const fruit = {
  banana: 'yellow',
  orange: 'orange'
}


console.log('we can import', _map(fruit, (v, k) => {
  return `${k} =>  ${v}`
}))

console.log('we can use .env vars', process.env.FRANKG)
