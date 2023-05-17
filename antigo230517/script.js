function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML =`Agora são ${hora} Hora(s) e ${min} minutos.`
    if (hora >= 0 && hora < 5) {
        img.src='madrugada.png'
        document.main.style.background = 'rgb(235, 81, 43)'  
    } else if (hora >=5 && hora < 12){
        img.src = 'manha.png'
        document.main.style.background = 'green'
    } else if (hora >=12 && hora < 18){
        img.src = 'tarde.png'
        document.main.style.background = 'green'
    } else {
        img.src = 'noite.png'
        document.main.style.background = 'black'
    }
}
    var sma = window.document.getElementById('dnav')
    var url = "curriculo.html"
    sma.addEventListener('Sobre mim', divsm)
function divsm() {
    window.open(url,'_blanck')
    }
    var fpm = window.document.getElementById('dasi')
    var urlfpm = "https://docs.google.com/forms/d/e/1FAIpQLSes2leFtJYoQl27JLNvGJuZ1pTRk1_Ff8iAMpWxWCh6vO7lPA/viewform?usp=sf_link"
    fpm.addEventListener('Fala para mim', divfpm)
function divfpm() {
    window.open(urlfpm,'_blanck')
    }
//function ment(){
//sma.style.background= 'blue'
//sma.innerText = 'Click'
//}
/*var sma1 = window.document.getElementById('dnav1')
var url1 = "https://docs.google.com/forms/d/e/1FAIpQLSes2leFtJYoQl27JLNvGJuZ1pTRk1_Ff8iAMpWxWCh6vO7lPA/viewform?usp=sf_link"
sma.addEventListener('Sobre mim', divcontato)
function divcontato() {
sma.style.background= 'white'
//sma.innerText = 'Click'
window.open(url,'_blanck')
}
//function mentcontato(){
//sma.style.background= 'blue'
//sma.innerText = 'Click'
//}*/