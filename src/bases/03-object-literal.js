const persona = {
    nombre: 'Luke',
    apellido: 'Skywalker',
    edad: 23,
    direccion: {
        ciudad: 'Mos Eisley',
        zip: 45688,
        lat: 98.6565,
        lng: 14.2894
    }
}

const persona2 = { ...persona }

persona2.nombre = 'Han'

console.log(persona)
console.log(persona2)