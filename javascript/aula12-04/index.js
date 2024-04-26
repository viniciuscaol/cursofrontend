alert("Minha Primeira Interação")
console.log("KKKKKKKKKKKKKKK");

const somarNumeros = () => {
    alert("Somar dois Numeros");
    let numero1 = Number(prompt("Digite o primeiro numero:"));
    let numero2 = Number(prompt("Digite o segundo numero:"));
    if(numero1 == null || numero2 == null) {
        alert("Numero Invalido")
    } else {
        alert(`O Resultado de ${numero1} + ${numero2} = ${numero1 + numero2}`)
    }
}

somarNumeros()