let resultado = document.querySelector('#resultado');
let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');

function calculoimc(){
    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)). toFixed(2)
        let classification =''
        if (imc < 18.5){
            classification = 'Abaixo do peso'
        } else if (imc >= 18.5 && imc < 25){
            classification = 'Peso normal'
        } else if (imc >= 18.5 && imc < 30){
            classification = 'Acima do peso'
        } else if (imc >= 18.5 && imc < 35){
            classification = 'Obesidade grau I'
        } else if (imc >= 18.5 && imc < 41){
            classification = 'Obesidade grau II'
        } else {
            classification = 'Obesidade grau III'
        }
        resultado.innerHTML = `IMC: ${imc} (${classification})`
    }else{
        resultado.innerHTML = 'Preencha os campos'
    }
}
