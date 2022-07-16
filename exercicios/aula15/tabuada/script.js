function clicou() {
    var res = document.querySelector('select#itabuada')
    var num = Number(document.querySelector('input#inum').value)
    var c = 1

    res.innerHTML = ''

    for (c; c <= 10; c++) {
        res.innerHTML += `<option>${c} x ${num} = ${num}</option>`
        c.value = `tab${c}`
    } 
}