function clicou() {
    var res = document.querySelector('div#resultado')
    var nome = document.querySelector('input#inome').value
    var altu = Number(document.querySelector('input#ialtura').value)
    var peso = Number(document.querySelector('input#ipeso').value)
    var imc = peso / (altu ** 2)
    var estado = ''

    res.innerHTML = `<p>${nome} tem ${altu.toFixed(2)} metros de altura e ${peso.toFixed(2)}Kg e tem um IMC de ${imc.toFixed(1)}.</p>`

    if (imc < 18.5) {
        estado = 'Abaixo do Peso'
    } else if (imc <= 24.9) {
        estado = 'Peso Normal'
    } else if (imc <= 29.9) {
        estado = 'Sobrepeso'
    } else if (imc >= 30) {
        estado = 'Obesidade'
    }

    res.innerHTML += `<p>Em estado de ${estado}.</p>`
}