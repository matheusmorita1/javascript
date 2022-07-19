function fat(n) {
    if (n == 1) {
        return 1
    } else {
        fator = 1
        dec = n * fat(n-1)
    }
}

console.log(fat(5))