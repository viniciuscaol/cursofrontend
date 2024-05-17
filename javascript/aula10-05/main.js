const galeria = document.getElementById('galeria');

const fetchPokemons = async () => {
    const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');
    const dados = await resposta.json();
    const resultado = dados.results;
    console.log(resultado);
    resultado.map((resultado)=> {
        let image = "";
        const fetchDetails = async () => {
            const pokeDetalhesresposta = await fetch(resultado.url);
            const pokeDados = await pokeDetalhesresposta.json();
            image = pokeDados.sprites.front_default;
        const pokemon = `
        
        `
        galeria.innerHTML += pokemon;lista
        }
    })
}

fetchPokemons();