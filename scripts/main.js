window.alert ('Preencha seus dados e responda as questões!');
function limpar() {
    window.alert('Valores apagados!');
}
document.querySelector('#limpar').onclick=limpar;

function enviar() {
    window.alert('Respostas enviadas, boa sorte!');
}
document.querySelector('#enviar').onclick=enviar;

function somar() {
    var cel1 = document.getElementById('cel_1')
    var cel2 = document.getElementById('cel_2')
    var cel3 = document.getElementById('cel_3')
    var cel4 = document.getElementById('cel_4')
    var cel5 = document.getElementById('cel_5')
    var cel6 = document.getElementById('cel_6')
    var cel7 = document.getElementById('cel_7')
    var cel8 = document.getElementById('cel_8')
    var cel9 = document.getElementById('cel_9')
    var cel10 = document.getElementById('cel_10')
    var cel11 = document.getElementById('cel_11')
    var cel12 = document.getElementById('cel_12')
    var cel13 = document.getElementById('cel_13')
    var cel14 = document.getElementById('cel_14')
    
    var soma = document.getElementById('total')

    var n1 = Number(cel1.value)
    var n2 = Number(cel2.value)
    var n3 = Number(cel3.value)
    var n4 = Number(cel4.value)
    var n5 = Number(cel5.value)
    var n6 = Number(cel6.value)
    var n7 = Number(cel7.value)
    var n8 = Number(cel8.value)
    var n9 = Number(cel9.value)
    var n10 = Number(cel10.value)
    var n11 = Number(cel11.value)
    var n12 = Number(cel12.value)
    var n13 = Number(cel13.value)
    var n14 = Number(cel14.value)

    var soma = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + n13 + n14
    total.innerHTML = soma
}
document.querySelector('#calcular').onclick=somar





