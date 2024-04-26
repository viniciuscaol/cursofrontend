function minhafuncao () {
    console.log("Ola");
    console.log("Sou Vinicius");
}

for (let i = 0; i < 10; i++) {
    minhafuncao();
}

function collatznumero5 () {
    let numero = 5;
    while(numero != 1) {
        if(numero %2 == 0) {
            numero = numero / 2;
        }
        else{
            numero = (numero * 3) + 1;
        }
    }
}
collatznumero5();