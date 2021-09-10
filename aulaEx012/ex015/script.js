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
        var genero = ''
        var img = document. createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'homembebe.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'mulherbebe.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)

    }
}