const check = document.querySelector('.form-check input');
const nome = document.querySelector('.form #name');
const natural = document.querySelector('.form #natural');
const profissao = document.querySelector('.form #prof');

check.addEventListener("click", function(){
    if(check.checked == true){
        nome.setAttribute('disabled', true);
        nome.style.opacity = .2;
        natural.setAttribute('disabled', true);
        natural.style.opacity = .2;
        profissao.setAttribute('disabled', true);
        profissao.style.opacity = .2;
        return
    } 
    nome.removeAttribute('disabled');
    nome.style.opacity = 1;
    natural.removeAttribute('disabled');
    natural.style.opacity = 1;
    profissao.removeAttribute('disabled');
    profissao.style.opacity = 1;
})