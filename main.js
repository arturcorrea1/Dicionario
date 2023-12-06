const summary = document.querySelector('summary');
const icone = document.querySelector('.rotate-icon');
let rotated = false;

summary.addEventListener('click', () => {
    if (rotated) {
        icone.style.transform = 'rotate(0deg)';
    } else {
        icone.style.transform = 'rotate(90deg)';
    }
    rotated = !rotated;
});

const abrirModal = document.querySelectorAll(".open-modal");
const fecharModal = document.querySelectorAll(".close-modal");
const modal = document.querySelectorAll(".modal");
const fade = document.querySelectorAll(".fade");

const toggleModal = (index) => {
    [modal[index], fade[index]].forEach((el) => el.classList.toggle("hide"));
};

abrirModal.forEach((button, index) => {
    button.addEventListener("click", () => toggleModal(index));
});

fecharModal.forEach((button, index) => {
    button.addEventListener("click", () => toggleModal(index));
});


// --------------------------------------

const botaoContainer = document.getElementById('btn-cont')
const audioModal = document.getElementById('aud-modal')

const botoes = objetos.map((objeto, indice)=>{
    const botao = document.createElement('button')
    botao.classList.add('botao-txt')

    botao.addEventListener('click', ()=>{
        audioModal.src = objeto.audio
    })
    return botao
})
