const miPromesa = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //resolve('Tenemos un valor en la promesa.')
            reject('Error en miPromesa.')
        }, 1500)
    })
}

const medirTiempoAsync = async() => {

    try {
        console.log('Inicio')
        
        const respuesta = await miPromesa()
        console.log(respuesta)
        
        console.log('Fin')
    } catch (error) {
        //Se ejecuta el then.
        //return 'Catch en medirTiempoAsync'
        //Se ejecuta el catch.
        throw 'Error en medirTiempoAsync'
    }
   
}

medirTiempoAsync()
    .then(valor => console.log('TRY exitoso: ', valor))
    .catch(err => console.log('Error: ', err))