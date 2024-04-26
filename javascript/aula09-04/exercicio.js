//Exercicio 1
let exercicio1 = 10;
let soma1 = 0;
for(let i =1; i<=exercicio1;i++) {
    soma1 += i;
    console.log(soma1)
}
console.log("Total do Valor = ",`${soma1}`)

//Exercocop 2
let base2 = 2;
let expoente2 = 40;
let resultado2 = 1;
for (let i = 0; i < expoente2; i++) {
    resultado2 *= base2
}
console.log(base2," elevado a ",expoente2," é igual a ",resultado2) 

//Exercicio 4
let num4 = 3;
for(let i = 1; i <=10;i++){
    console.log(`O Numero ${num4} X ${i} é igual a ${num4*i}`);
}

for(let i = 1; i<=10;i++){
    for(let j = 1; j<=10;j++){
        console.log(`${i}X${j}=${i*j}`);
    }
}

//Exercicio 5

let soma5 = 0;
for(let i = 100; i <= 200; i++) {
    if (i%9 == 0) {
        console.log(i, "é divisivel por 9")
        soma5 += i;
    }
}
console.log("Total da soma dos numeros divisiveis por 9 entre 100 e 200 é igual a",soma5);
