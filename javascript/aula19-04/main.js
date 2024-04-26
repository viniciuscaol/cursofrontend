const display = document.getElementById('display');
console.log(display.value);

const exibirNumero = ( numero) => {
    display.value += numero ;
    console.log(display.value);
};
const clearDisplay = () => {
    display.value = "";
};

const pontoDecimar = () => {
    if(!display.value.includes('.')) {
        display.value += '.';
    }
}

const limparUltimoDigito = () => {
    display.value = display.value.slice(0,-1);
}

const fazerConta = () => {
    let resultado = eval(display.value);
    display.value = resultado;
}





