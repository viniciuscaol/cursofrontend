const cep = document.getElementById('rua');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const ibge = document.getElementById('ibge');
const btn = document.getElementById('btn');

function limparFormulario () {
    const inputs = document.querySelectorAll('input');
    for(let input of inputs) {
        input.value = "";
    }
}

function callback_cep (conteudo) {
    if(!("erro" in conteudo)) {
        rua.value = conteudo.logradouro;
        bairro.value = conteudo.bairro;
        cidade.value = conteudo.localidade;
        estado.value = conteudo.uf;
        ibge.value = conteudo.ibge;
    }
    else {
        limparFormulario();
        alert("O CEP digitado é invalido.")
    }
}

function pesquisarCEP (valor) {
    let novoCep = valor.replace(/\D/g, '');
    if( novoCep != "") {
        let validarCep = /^[0-9]{8}$/;
        if(validarCep.test(novoCep)) {
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${novoCep}/json/?callback=callback_cep`;
            document.body.appendChild(script);
        }
        else {
            limparFormulario();
            alert("Formato de CEP Inválido!");
        }
    }
    else {
        limparFormulario();
    }
}

btn.addEventListener('click',() => {
    limparFormulario();
});