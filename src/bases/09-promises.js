import { getHeroByID } from "./bases/08-imp-exp"

/* console.log('Inicio')

new Promise(( resolve, reject ) => {
    console.log('Cuerpo de la promesa')
    resolve('Promesa resuelta.')
    //reject('Promesa resuelta con error.')
})
.then( console.log )
.catch( console.log )

console.log('Fin') */


const getHeroByIdAsync = (id) => {
    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {

            const hero = getHeroByID( id )
            if (hero) {
                resolve(hero)
            }else {
                reject('No existe un héroe con ese ID.')
            }

        }, 2000)

    })
}

getHeroByIdAsync(2)
    .then( h => {
        console.log(`El héroe es ${ h.name }`)
    })
    .catch(console.log)