class Pessoa {
    constructor(nome,matricula,idade) {
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
    }
    chegarNaEscola () {
        console.log(`Olá cheguei na escola e me chamo ${this.nome}`);
    }

    getNome () {return this.nome};
    getMatricula () {return this.matricula};
    getIdade () {return this.idade};

    setNome (nome) {this.nome = nome};
    setMatricula (matricula) {this.matricula = matricula};
    setIdade (idade) {this.idade = idade};
};

const cadastrarPessoa = () => {
    alert("Bem vindo ao cadastro de Pessoa");
    let pessoa = new Pessoa ();
    let nome = prompt("Digite o nome da pessoa");
    let idade = prompt("Digite a idade da pessoa");
    let matricula = prompt("Digite a matricula da pessoa");
    if (nome == null || idade == null || matricula == null) {
        alert ("Dados invalidos digitados");
    } 
    else {
    pessoa.setIdade(idade);
    pessoa.setNome(nome);
    pessoa.setMatricula(matricula);
    alert(`A pessoa com nome ${pessoa.getNome()} e idade ${pessoa.getIdade()} com matricua ${pessoa.getMatricula()} foi cadastrada.`)
    }
}

function verificarAnoBissexto () {
    alert("Vamos verificar se o ano é bissexto ou não");
    let ano = parseInt(prompt("Digite o ano que gostaria de verificar"));
    if(isNaN(ano) || ano === null){
        alert("Valor digitado é invalido");
    } else {
        if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
            alert(`O ano de ${ano} é Bissexto`);
        } else {
            alert(`O ano de ${ano} não é Bissexto`);
        }
    }
}

const verificarParOuImpar = () => {
    alert("Vamos verificar se o numero é par ou impar");
    let numero = parseInt(prompt("Digite o numero que gostaria de verificar"));
    if(isNaN(numero) || numero === null) {
        alert("Numero Invalido")
    }
    else {
        if (numero % 2 === 0) {
            alert(`O numero ${numero} é Par`);
        } else {
            alert(`O numero ${numero} é Impar`);
        }
    }
}

const somarArrays = () => {
    let soma = 0;
    let posicao = 0;
    const array = [];
    alert("Vamos digitar os elemetos do Array");
    let escolhendo = true;
    while(escolhendo) {
        let escolha = prompt(`Digite o numero a ser armazenado na posição ${posicao} do Array`);
        posicao++;
        if(escolha === null) {
            alert("Opção Invalida")
        } else if(escolha === "!quit") {
            alert(array);
            alert(soma);
            escolhendo = false;
            break;
        } else {
            array.push(Number(escolha))
            soma+= Number(escolha);
        }
    }

}




const exemplo = () => {

    const titulo = document.querySelector('h1');
    if(titulo.innerText === "Exercicios") {
        titulo.innerText = "Novos Exercicios ";
        titulo.style.color = "red";
    } else {
        titulo.innerText = "Exercicios";
        titulo.style.color = "blue";
    }

}

const avermelhar = () => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach((button) => {
        if(button.style.color === 'red') {
            button.style.color = 'black'
        } else {
            button.style.color = 'red';
        }
    })
}

