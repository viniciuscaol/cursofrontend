const containerNotas = document.getElementById('nota_container');
const btn = document.getElementById('btn');
const notas = document.querySelectorAll('.input_box');

const atualizarLocalStorage = () => {
    localStorage.setItem('notes',containerNotas.innerHTML);
}

const exibirNotas = () => {
    containerNotas.innerHTML = localStorage.getItem('notes');
}

btn.addEventListener('click', () => {
    let novoElemento = `
    <p contenteditable="true" class="input_box">
        <img src="img/trash-bin-minimalistic-svgrepo-com.svg" alt="">
    </p>
    `
    containerNotas.innerHTML += novoElemento;
    console.log(containerNotas.innerHTML);
    atualizarLocalStorage();
});



exibirNotas();