const characters = ['Anakin', 'Obi-Wan', 'Ahsoka']

const [an, o, ah, mace = 'Sin valor'] = characters

console.log(mace)

const returnArray = ([ letters, numbers ]) => {
    return [ letters, numbers ]
}

const [ letters, numbers ] = returnArray([ 'Movies', 456123789 ])

console.log(letters, numbers)