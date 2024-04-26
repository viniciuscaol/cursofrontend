// conversao variavel.

let idade = 22;
console.log(typeof idade, idade);
idadestring = idade.toString();
console.log(typeof idadestring, idadestring);

let numero = 20;
let textonumero = numero.toString();
console.log(typeof numero, numero);
console.log(typeof textonumero, textonumero);

let dianascimento = "25";
let dianumero = Number(dianascimento);
console.log(dianascimento, typeof dianascimento);
console.log(dianumero, typeof dianumero);


// parseFloat
// parseInt

//Boleanos
//Qualquer valor numerico diferente de zero = true
//Para string qualquer valor = true, variavel vazia = false
let numbool = 0;
console.log(typeof numbool, numbool);
let booleano = Boolean (numbool);
console.log(typeof booleano, booleano);


//Concatenar Valores.

let nome = "Vinicius "
let sobrenome =  "Caldas Oliveira"
let nomecompleto = nome + sobrenome;
console.log(nomecompleto);

//Se tiver string ele vai tratar todas as variaveis como string.

let text = "20";
let num1 = 10;
console.log(text+num1);
textnum = Number(text);
console.log(textnum+num1);

//Subtração ele converte string numero exp "50" para 50 e so funciona para numeros.

//Multiplicação e divisão eles convertem tbm string em numero sondo a sintrig com caracter numerico.
