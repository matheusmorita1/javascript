var fatia = 8

console.log(`Uma pizza tem ${fatia} fatias.`)

//Estrutura de repetição com teste lógico no final
do {
    console.log('Fulano comeu uma fatia.')
    fatia -= 1
    console.log(`Restaram ${fatia} fatias.`)
} while (fatia != 0)