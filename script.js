function apagarTudo(){
    document.getElementById('resultado').innerHTML = ""
}

function limpar(){
    let calculo = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = calculo.substring(0, calculo.length-1);
}

function inserir(dado){
    let calculo = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = calculo + dado;
}

function calcular(){
    let calculo = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(calculo);
}

function power(exp){
    let calculo = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = calculo + `^${exp}`;
    document.getElementById('resultado').innerHTML = Math.pow(calculo,exp);
}