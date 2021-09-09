function carregar() {
    // variável para capturar a mensagem dentro da div
var msg = window.document.getElementById('msg');
    // variável para capturar imagem dentro da div
var img = window.document.getElementById('imagem');
    // variável para capturar o tempo
var data = new Date();
    // variável para capturar a hora específica
var hora = data.getHours()
    // comando para inserir a mensagem dentro da div
    // dentro da div "mensgem" o html será alterado para a seguinte mensgem
msg.innerHTML = `Agora são ${hora} horas.`
hora = 13
    // se a hora for maior ou igual a 0 e menor que 12, o resultado é "bom dia"
if (hora >= 0 && hora < 12) {
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
    // se a hora for maior ou igual a 12 e menor que 18, o resultado é "boa tarde"
} else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#fac13f'
    
    // se não o resultado é "boa noite"
} else {
     img.src ='noite.png'
     document.body.style.background = '#203661'
}

}