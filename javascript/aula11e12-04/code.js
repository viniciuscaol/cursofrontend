function saudar (nome) {
    console.log(`Seja bem vindo ${nome}`);
}

saudar("Vinicius");
saudar("Francisco");
saudar("João")

let nomes = ["Vinicius","Francisco","João","Fulano","Beltrano","Cicrano",23,"DDD",false,"Claudio",null];
let nomes1 = [];

saudar(nomes[0]);
console.log(nomes);

//loops

for(let i=0; i < nomes.length; i++) {//.length é a quantidade de itens que tem na lista
    saudar(nomes[i]);
}

for(let nome of nomes) {
    saudar(nome);
}


function dobrar (numero) {
    console.log(`${numero * 2}`);
}
let numeros = [1,2,3,4,5,6];
for(let numero of numeros){
    dobrar(numero);
}

let matriz = [[1,2],[3,4]];
console.log(matriz[1][0]);

let numeroescrito = numeros.toString();
console.log(numeros.toString());

console.log(numeros);
numeros.push(7);//push add valor no final da lista.
numeros.push(8);
numeros.push(9);
numeros.push(2);
console.log(numeros);

console.log(numeros);
numeros.pop();//remove o ultimo item da lista
numeros.shift();//remove o primeiro item da lista
console.log(numeros);

let numerosnovo = numeros.slice(0,4);//slice ele cria um array com uma range de itens que voce define
console.log(numerosnovo);

let numerosnovos = numeros.concat(numerosnovo,"p",10,matriz);//concat cria uma array novo concatenando valores da listas e variaveis que colocar.
console.log(numerosnovos);

console.log(numerosnovos.indexOf(3));//pega o valor index da primeira vez que aparece o valor
console.log(numerosnovos.lastIndexOf(3));//pega o valor da index da ultima vez que aparece o valor se o 
                                        //resultado da consulta for -1 é pq o valor nao existe na consulta

console.log(numeros);
numeros.unshift(20);//unshift adiciona valor no inicio da lista[0]
console.log(numeros);

function dobrar1 (numero1) {
    return numero1 * 2;
}
// =============================== As duas são iguais.

const dobrararrow = (numero1) => numero1 * 2;

let numeros1= [1,2,3,4,5];
let dobrados = numeros1.map((numeros1) => numeros1 * 2);
console.log(dobrados);

//Comparação de array
//== se os valores são iguais === se valores e tipo são iguais

let array1 = [1,2,3];
let array2 = [1,2,3];
console.log(array1 === array2);
console.log(JSON.stringify(array1) === JSON.stringify(array2));
