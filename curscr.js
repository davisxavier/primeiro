var sma = window.document.getElementById('dnavcur')
var url = "https://docs.google.com/forms/d/e/1FAIpQLSes2leFtJYoQl27JLNvGJuZ1pTRk1_Ff8iAMpWxWCh6vO7lPA/viewform?usp=sf_link"
sma.addEventListener('Sobre mim', divcontato)
//sma.addEventListener('mouseenter', mentcontato)
//sma.addEventListener('mouseout',moutcontato)
function divcontato() {
sma.style.background= 'white'
//sma.innerText = 'Click'
window.open(url,'_blanck')
}
//function mentcontato(){
//sma.style.background= 'blue'
//sma.innerText = 'Click'
//}
//function moutcontato(){
//sma.style.background= 'white'
//sma.innerText = 'Contato'
//}