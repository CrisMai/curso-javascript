
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'diaa250.png'
        document.body.style.background = '#B4DBC0'
    }
    else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde250.png'
        document.body.style.background = '#F7EF6A'
    }
    else {
        //BOA NOITE!
        img.src = 'noite250.png'
        document.body.style.background = '#515154'
    }

}