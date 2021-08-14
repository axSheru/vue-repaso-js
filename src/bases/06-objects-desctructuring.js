const person = {
    name: 'Din Djarin',
    age: 36,
    codeName: 'Mando'
}

const { name, age, codeName, power = 'Sin poderes' } = person

console.log(name)
console.log(age)
console.log(codeName)
console.log(power)

const createHero = ( {name, codeName, power = 'This is the way'} ) => ({id: 215465, name, codeName, power })

console.log( createHero( person ) )