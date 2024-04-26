const containerNotas = document.getElementById('nota_container');
const btn = document.getElementById('btn');



const atualizarLocalStorage = () => {
    localStorage.setItem('notes',containerNotas.innerHTML);
}

const exibirNotas = () => {
    containerNotas.innerHTML = localStorage.getItem('notes');
}

exibirNotas();

btn.addEventListener('click', () => {
    let novoElemento = `
    <p contenteditable="true" class="input_box">
        <img id="trash" src="img/trash-bin-minimalistic-svgrepo-com.svg" alt="">
    </p>`

    containerNotas.innerHTML += novoElemento;
});

containerNotas.addEventListener('click',(e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        atualizarLocalStorage();
    } else if (e.target.tagName ==="P") {
        const notas = document.querySelectorAll('.input_box');
        notas.forEach(letra => {
            letra.onkeyup = function () {atualizarLocalStorage() ;}
        })
    }
    
});


