//Exercicio 1
// let exer1 = [1,2,3,4,5];
// let soma1 = 0;
// for(let i = 0; i < exer1.length;i++){
//     soma1 += exer1[i];
// }
// console.log(soma1);
function somarelemetos1 (array) {
    let soma1 = 0
    for(numero of array) {
        soma1 += numero;
    }
    return soma1
}

let numeros = [2,4,10]

console.log(somarelemetos1(numeros));
//Exercicio 2

//Exercicio 3

let exer3 = [1,2,3,4,5];
let num3 = 2;
for(let i = 0; i < exer3.length;i++){
    if (num3 == exer3[i]) {
        console.log(`O valor ${num3} esta no Array`)
    }else {
        console.log(`O valor ${num3} não esta no Array`)
    }
}


//Exercicio 4
let exer4 = [1,2,3,4,5];
let soma4 = 0;
for(let i = 0; i < exer4.length;i++){
    soma4 += exer1[i];
}
console.log(soma4/exer4.length);