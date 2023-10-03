window.alert ('Preencha seus dados e responda as questões!');

function enviar() {
    window.alert('Respostas enviadas, boa sorte!');
}
document.querySelector('#enviar').onclick=enviar;

function limpar() {
    window.alert('Valores apagados!')
    document.getElementById('total')
    total.innerHTML = 0
}
document.getElementById('limpar').onclick=limpar;

function somar() {
    var cel1 = Number(document.getElementById('cel_1').value);
    var cel2 = Number(document.getElementById('cel_2').value);
    var cel3 = Number(document.getElementById('cel_3').value);
    var cel4 = Number(document.getElementById('cel_4').value);
    var cel5 = Number(document.getElementById('cel_5').value);
    var cel6 = Number(document.getElementById('cel_6').value);
    var cel7 = Number(document.getElementById('cel_7').value);
    var cel8 = Number(document.getElementById('cel_8').value);
    var cel9 = Number(document.getElementById('cel_9').value);
    var cel10 = Number(document.getElementById('cel_10').value);
    var cel11 = Number(document.getElementById('cel_11').value);
    var cel12 = Number(document.getElementById('cel_12').value);
    var cel13 = Number(document.getElementById('cel_13').value);
    var cel14 = Number(document.getElementById('cel_14').value);

    var soma = cel1 + cel2 + cel3 + cel4 + cel5 + cel6 + cel7 + cel8 + cel9 + cel10 + cel11 + cel12 + cel13 + cel14;
    document.getElementById('total')

    total.innerHTML = soma;
}
document.getElementById('calcular').onclick=somar






