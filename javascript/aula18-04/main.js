const cadastrarPessoa = () => {
    const nomeInput = document.querySelector('input[name ="nome"]');
    const idadeInput = document.querySelector('input[name ="idade"]');
    const nacionalidadeInput = document.querySelector('input[name ="nacionalidade"]');
    const pessoa = document.getElementById('pessoas');
    
    const novoElemento = document.createElement('div')
    novoElemento.classList.add('card_pessoa');

    const nomePessoa = document.createElement('h2');
    nomePessoa.innerText = nomeInput.value;

    const idadePessoa = document.createElement('p');
    idadePessoa.innerText = idadeInput.value;

    const nacionalidadePessoa = document.createElement('p');
    nacionalidadePessoa.innerText = nacionalidadeInput.value;

    novoElemento.append(nomePessoa,idadePessoa,nacionalidadePessoa);
    console.log(novoElemento)
    pessoa.appendChild(novoElemento);
}

const button = document.getElementById('button');
button.addEventListener('click',cadastrarPessoa);