let num = [6, 3, 5, 2, 9, 3, 10, 43]

// forma mais completa de se fazer a etrutura

for (let pos = 0; pos < num.length; pos ++) { // o for vai iniciar com pos = 0; enquanto pos for menor que a quantidade de elementos da v.c num; pos terá um incremento
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// forma mais simplificada

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

var indice = num.indexOf(11)

if (indice == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está no índice ${indice}`)

}