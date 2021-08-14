/* function saludar(nombre) {
    return `Hola ${nombre}`
} */

/* const saludar = function (nombre) {
    return `Hola ${nombre}`
} */

const saludar = (nombre = 'Ahsoka') => `Hola ${nombre}`

const nombre = 'Luke'

console.log(saludar(nombre))

const getUser = () => {
    return{
        uid: 'ABC123',
        username: 'JediMaster'
    }
}

const getUser2 = () => ({
    uid: 'ABC123',
    username: 'JediMaster'
})

console.log( getUser() )
console.log( getUser2() )

const siths = [
    {
        id: 1,
        name: 'Tyranus'
    },
    {
        id: 2,
        name: 'Sidious'
    }
]

const existeSome = (id) => siths.some(sith => sith.id = id)

console.log(existeSome(1))

const existeFind = (id) => siths.find(sith => sith.id === id)

console.log(existeFind(1))

const { name } = siths.find( ( sith ) => sith.id === 1 )

console.log(name)