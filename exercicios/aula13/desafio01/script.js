var agora = new Date()
var hora = agora.getHours()
var corpo = document.querySelector('div#container')

corpo.innerHTML = `<p>Agora são ${hora} Horas.</p>`

if (hora > 0 && hora < 12) {
    document.body.style.backgroundColor = 'rgb(143, 143, 8)'
    corpo.innerHTML += '<img class="imagem" src="imagens/manha.png" alt="Foto da Manhã">'
} else if (hora >= 12 && hora <= 18) {
    document.body.style.backgroundColor = '#be7200'
    corpo.innerHTML += '<img class="imagem" src="imagens/tarde.png" alt="Foto da Tarde">'
} else {
    document.body.style.backgroundColor = 'rgb(0, 8, 54)'
    corpo.innerHTML += '<img class="imagem" src="imagens/noite.png" alt="Foto da Noite">'
}