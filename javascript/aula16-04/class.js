class Pessoa {
    constructor(nome,idade,sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    saudar () {
        console.log(`Olá me chamo ${this.nome}`);
        console.log(`Tenho ${this.idade}`);
    }
    viver () {
        console.log("Estou Vivo");
    }
};

let pessoa = new Pessoa ("Vinicius",38,"Masculino");
pessoa.saudar();
let francisco = new Pessoa ("Francisco",40,"Masculino")
francisco.saudar();

class Aluno {
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

class AlunoPosGrad extends Aluno {
    constructor(nome,matricula,idade,sala,dataGrad,numDiploma) {
        super (nome,matricula,idade);
        this.sala = sala;
        this.dataGrad = dataGrad;
        this.numDiploma = numDiploma;
    }
}

class AlunoBercario extends Aluno {
    constructor(nome,matricula,idade,responsavel) {
        super(nome,matricula,idade);
        this.responsavel = responsavel;
    }
}

let jao = new AlunoBercario("Jão",1604202411,2);
let tiao = new AlunoPosGrad("Tião",1604202425,40);

jao.chegarNaEscola();
tiao.chegarNaEscola();
console.log(tiao.idade);
tiao.idade = 50;
console.log(tiao.idade);
console.log(jao.matricula);
console.log(jao.getIdade);

let aluno = new Aluno ();
aluno.setIdade(20);
aluno.setMatricula(1004202430);
aluno.setNome("Joana");
console.log(aluno);