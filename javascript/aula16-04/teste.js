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