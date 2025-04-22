function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
    
function mostrarResultado(){
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    const imc = calcularIMC(peso, altura).toFixed(2);
    let classificacao = '';

    if (imc < 18.5){
        classificacao = 'abaixo do peso';
    } else if (imc < 25){
        classificacao = 'peso normal';
    } else if (imc < 30){
        classificacao = 'sobrepeso';
    } else if (imc < 35){
        classificacao = 'obesidade grau I';
    } else if (imc < 40) {
        classificacao = 'obesidade grau II'; 
    } else {
        classificacao = 'obesidade grau III (risco)';
    }

    resultado.textContent = `Seu IMC é ${imc} (${classificacao}).`;
}
