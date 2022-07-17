function clicou() {
    var res = document.querySelector('div#resultado')
    var i = Number(document.querySelector('input#iinicio').value)
    var f = Number(document.querySelector('input#ifim').value)
    var p = Number(document.querySelector('input#ipasso').value)

    res.innerHTML = '<p>Contando:</p>'

    for (i; i <= f; i += p) {
        res.innerHTML += `${i} &#x1F449`
    }

    res.innerHTML += '&#x1F3C1'
}