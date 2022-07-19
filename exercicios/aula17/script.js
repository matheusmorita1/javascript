let num = []
let corpo = document.querySelector('select#isec')
var resultado = document.querySelector('div#resultado')

function adicionar() {
    let valor = Number(document.querySelector('input#inum').value)
    
    num.push(valor)

    corpo.innerHTML += `<option>Valor ${valor} adicionado.</option>`
}

function final() {
    num.sort()
    resultado.innerHTML += `<p>Ao todo, temos ${num.length} números cadastrados.</p>`
}