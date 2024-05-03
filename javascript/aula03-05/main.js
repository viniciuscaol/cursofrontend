const btn = document.getElementById('btn');
const resultado = document.getElementById('resultado');
const cep = document.getElementById('cep');

async function fetchViaCepData () {
    // fetch('https://viacep.com.br/ws/40210902/json/')
    // .then(resolve => resolve.json())
    // .then(data => console.log(data))
    // .catch(error =>{error.message})
    try {
        const cepValue = cep.value.trim();
        const apiURL = `https://viacep.com.br/ws/${cepValue}/json/`;
        const resposta = await fetch(apiURL);
        const data = await resposta.json();
        if(data.erro) {
            resultado.innerText = 'Valor Invalido'
        } else {
            resultado.innerText = `Na cidade de ${data.localidade} ,${data.bairro} , ${data.logradouro} `
        }

    } catch (error) {
        console.log('Lascou')
    }
}

btn.addEventListener('click',fetchViaCepData);