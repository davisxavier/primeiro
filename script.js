function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 2
    msg.innerHTML =`Agora são ${hora}:${min}h.`
    if (hora >= 0 && hora < 5) {
        //bom dia
        img.src='madrugada.png'
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
    var sma = window.document.getElementById('dnav')
    var url = "curriculo.html"
    sma.addEventListener('Sobre mim', divsm)
function divsm() {
    sma.style.background= 'white'
    window.open(url,'_blanck')
    }
//function ment(){
//sma.style.background= 'blue'
//sma.innerText = 'Click'
//}
//function mout(){
//    sma.style.background= 'white'
//    msg.innerHTML ='sobremim.png'
//}
