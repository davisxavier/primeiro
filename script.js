function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    //var hora = 2
    msg.innerHTML =`Agora são ${hora} horas.`
    if (hora >= 0 && hora < 5) {
        //bom dia
        img.src='noite.png'
        document.main.style.background = 'rgb(235, 81, 43)'  
    } else if (hora >=5 && hora < 12){
        //boa tarde
        img.src = 'manha.png'
        document.main.style.background = 'green'
    } else if (hora >=12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.main.style.background = 'green'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.main.style.background = 'black'
    }
}