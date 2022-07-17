let num = [1, 5, 9, 3, 2, 10, 54, 123]

for (let pos in num) {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}

var ind = num.indexOf(5)

if (ind == -1) {
    console.log('Índice não encontrado, por favor, tente um conteúdo válido')
} else {
    console.log(`O índice encontrado foi ${ind}`)
}