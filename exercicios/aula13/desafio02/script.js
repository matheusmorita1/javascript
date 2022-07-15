var corpo = document.querySelector('div#resul')
var hoje = new Date()
var ano_hoje = hoje.getFullYear()

function clicou() {
    var ano_nasc = Number(document.querySelector('input#ano_nasc').value)
    var idade = ano_hoje - ano_nasc
    var sexo = document.getElementsByName('radsex')
    var genero = ''

    if (sexo[0].checked) {
        genero = 'Homem'
        corpo.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`

        if (idade >= 2 && idade < 5) {
            corpo.innerHTML += '<img src="imagens/homem-bebe.png">'
        } else if (idade >= 5 && idade < 15) {
            corpo.innerHTML += '<img src="imagens/homem-crianca.png">'
        } else if (idade >= 15 && idade < 19) {
            corpo.innerHTML += '<img src="imagens/homem-jovem.png">'
        } else if (idade >= 19 && idade <= 49) {
            corpo.innerHTML += '<img src="imagens/homem-adulto.png">'
        } else {
            corpo.innerHTML += '<img src="imagens/homem-idoso.png">'
        }
    } else {
        genero = 'Mulher'
        corpo.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`

        if (idade >= 2 && idade < 5) {
            corpo.innerHTML += '<img src="imagens/mulher-bebe.png">'
        } else if (idade >= 5 && idade < 15) {
            corpo.innerHTML += '<img src="imagens/mulher-crianca.png">'
        } else if (idade >= 15 && idade < 19) {
            corpo.innerHTML += '<img src="imagens/mulher-jovem.png">'
        } else if (idade >= 19 && idade <= 49) {
            corpo.innerHTML += '<img src="imagens/mulher-adulto.png">'
        } else {
            corpo.innerHTML += '<img src="imagens/mulher-idoso.png">'
        }
    }
}