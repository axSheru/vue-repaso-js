//import { owners } from "./bases/data/heroes";

import superHeroes from '../data/heroes';

//console.log(superHeroes)

export const getHeroByID = (id) => superHeroes.find(heroe => heroe.id === id)

export const getHeroesByOwner = (owner) => superHeroes.filter(heroe => heroe.owner === owner)

//Importar desde el index.
/* import { getHeroByID, getHeroesByOwner } from "./bases/08-imp-exp"

console.log(getHeroByID(2))

console.log(getHeroesByOwner('Marvel')) */
