const acessKey = "-llglHFuoLOHZzZ-JrtUyx1YxgEwZiynQi4XBF9vgEI";
const exemplo = {

};

const btnPesquisar = document.getElementById('btn_pesquisa');
const input = document.getElementById('campo_de_busca');
const buscaResultado = document.getElementById('buscar_resultado');
let keyword = " ";
let page = 1;


const pesquisarImagens = async () => {
    keyword = input.value;
    const url = `https://api.unsplash.com/search/photo?page=${page}&query=${keyword}&client_id=t52yz2e9ewBqwMMRTgWdwXb5RhLyF8W9KUbNQV-N8F0&per_page=12`
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const resultados = dados.results;
    // fetch(url)
    // .then(resposta => resposta.json())
    // .then(dados => {informacoes = dados});

    if(page === 1) {
        buscaResultado.innerHTML = "";
    }

    resultados.map((resultado) => {
        const image = document.createElement('img');
        image.src = resultado.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = resultado.links.html;
        imageLink.appendChild(image);
        buscaResultado.appendChild(imageLink)
        
    })
};

btnPesquisar.addEventListener('click',pesquisarImagens);