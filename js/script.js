function numero() {
    var txtNumber = document.querySelector('input#txtNumber')
    var res = document.querySelector('div#res')
    var numero = Number(txtNumber.value)
    res.innerHTML = `<p> Seu número é ${numero} </p>`

    if (numero % 2 == 0) {
        $("#exampleModalCenter").modal();
    } else {
        res.innerHTML += `<p>Número Impar </p>`
    }
}