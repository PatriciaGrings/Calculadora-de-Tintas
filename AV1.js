var aParede = 0
var tipoTinta = 0
var aAberturas= 0
var aParedeTot=0
var aAberturasTot=0
var vetParedes = []
var vetAberturas = []

function tinta() {
    var ttinta = document.getElementById('txtTinta')
    var escolha = Number(ttinta.value)
    /*var ttinta= window.prompt('Qual tipo de tinta será utilizada?')
    var escolha = parseInt(ttinta)*/
    
    switch (escolha) {
        case 1:
            tipoTinta= 8
        break
        case 2:
            tipoTinta= 8
        break
        case 3:
            tipoTinta= 12
        break
        case 4:
            tipoTinta= 8
        break
        case 5:
            tipoTinta= 10
        break
        case 6:
            tipoTinta= 12
        break
        case 7:
            tipoTinta= 14
        break
        case 8:
            tipoTinta= 9
        break
    }
    var tinta= document.getElementById('txtTipotinta')
    tinta.innerHTML= ''
        var itemTinta= document.createElement('option')
        itemTinta.text= 'Você selecionou o tipo ' + escolha
        tinta.appendChild(itemTinta)
}

function paredes() {
    aParede = 0 
   
        var altParede = document.getElementById('hParede').value
        var altParede = parseFloat(altParede.replace(',', '.'))
        window.alert(altParede)
        var largParede = document.getElementById('lParede').value
        var largParede = parseFloat(largParede.replace(',', '.'))
        window.alert(largParede)
        aParede= altParede*largParede
        window.alert(aParede.toFixed(2))
        vetParedes.push(aParede)
        window.alert('A área total de paredes é = ' + vetParedes)
        document.getElementById('hParede').value = ""
        document.getElementById('lParede').value = ""

    }
    window.alert('A área total de paredes é = ' + (vetParedes.toFixed(2)))


function aberturas(){
    aAberturas= 0
    var entAbert= document.getElementsByName('abert')
        if (entAbert[0].checked) {
            var altAbert = document.getElementById('hAberturas').value
            var altAbert= parseFloat(altAbert.replace(',', '.'))
            window.alert(altAbert)
            var largAbert = document.getElementById('lAberturas').value
            var largAbert= parseFloat(largAbert.replace(',', '.'))
            window.alert(largAbert)
            aAberturas= altAbert*largAbert
            window.alert(aAberturas)
            vetAberturas.push(aAberturas)            
            document.getElementById('hAberturas').value = ""
            document.getElementById('lAberturas').value = ""  
        }  
        else if (entAbert[1]){
            vetAberturas.push(0)
            document.getElementById('hAberturas').value = ""
            document.getElementById('lAberturas').value = ""
        }
        else {
            window.alert('É necessário selecionar uma opção')
            return
        }
        window.alert(vetAberturas)
}


    
function calcular() {
    aParedeTot=0
    aAberturasTot=0
    var tab= document.getElementById('txttab')
    tab.innerHTML = ''
    window.alert(vetParedes.length)
    for (var con=1; con<=3; con++ ){
        aParedeTot += vetParedes[con]   
        window.alert(aParedeTot)
    }
    /*for (var cont=1; cont=vetAberturas.length; cont++ ){
        aAberturasTot += vetAberturas[cont]
    
    var aTot= aParedeTot-aAberturasTot
            
            window.alert(aAberturasTot)
            window.alert(aTot)
            window.alert(tipoTinta)
            var h= aTot/tipoTinta
            window.alert(h)
            item.text= aTot + '/' + tipoTinta + '=' + h 
            tab.appendChild(item)}*/    
    }   

    

