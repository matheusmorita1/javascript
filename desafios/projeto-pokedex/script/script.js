var resultado = document.querySelector('div#iresultado')
var img = document.createElement('img')

function clicou() {
    var poke = document.querySelector('input#ipoke').value
    img.setAttribute('id', 'foto')

        switch (img) {
            case '001':
                img.setAttribute('src', 'imgs/001-bulbasaur.png')
                break
            case '002':
                img.setAttribute('src', 'imgs/002-ivysaur.png')
        }

    resultado.style.textAlign = 'center'
    resultado.innerHTML = `O pokémon que você pesquisou foi...`
    resultado.appendChild(img)
}