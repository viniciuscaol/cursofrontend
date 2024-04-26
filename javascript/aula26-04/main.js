const inputBox = document.getElementById("input_box");
const containerLista = document.getElementById('container_lista');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert('Campo não pode ser em branco');
    } else {
        const li = document.createElement('li');
        li.innerText = inputBox.value;
        containerLista.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
})

containerLista.addEventListener('click',(e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('marcada');
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
})