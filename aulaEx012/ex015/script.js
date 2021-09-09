function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

// se o ano inserido for igual a 0 ou se for maior que o ano atual = mensagem de erro
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value)
        resultado.innerHTML = `Idade calculada: ${idade}`

    }
}