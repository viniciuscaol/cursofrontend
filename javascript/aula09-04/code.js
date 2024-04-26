let booleano = true;
let cont = 0;
while(cont <=100) {
    console.log("Looping",cont);
    cont++;
}

cont = 0;
while(cont <= 100) {
    if(cont % 13 == 0) {
        cont += 30;
        console.log(cont);
    }
    console.log(cont);
    cont++;
}

cont = 21;
while(cont <= 100 && cont > 20) {
    console.log(cont);
    cont++;
}

for(let i = 0; i <= 10; i++) {
    console.log(i);
}


for(let i = 0; i <= 10; i++) {
    console.log(i);
    if(i == 5) {
        i=20;
        console.log(i);
    }
}

for(let i =1; i<=10;i++){
    let nome = "Vinicius";
    console.log(nome);
}
var nome = "Lais";
console.log(nome);

var nome = "Vinicius";
let booleano = true;

while(!booleano) {
    console.log("kkkkkk")
}

var diaSemana = 7;
let booleano = true;

do {
    console.log("Hoje é dia");
    diaSemana++;
    } while(diaSemana <= 5) {
}

