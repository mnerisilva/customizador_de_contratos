const areaTexto = document.querySelector('.area-texto');
const check = document.querySelector('.form-check input');
const nome = document.querySelector('.form #name');
const natural = document.querySelector('.form #natural');
const profissao = document.querySelector('.form #prof');

if(check.getAttribute('checked')){
    habilitaCampos()
    areaTexto.setAttribute('contentEditable', false)
}


check.addEventListener("click", function(){
    if(check.checked == true){
        habilitaCampos()
        areaTexto.setAttribute('contentEditable', false)
        return
    } 
    desabilitaCampos()    
    areaTexto.setAttribute('contentEditable', true)
})

function habilitaCampos(){
        nome.removeAttribute('disabled', true);
        nome.style.opacity = 1;
        natural.removeAttribute('disabled', true);
        natural.style.opacity = 1;
        profissao.removeAttribute('disabled', true);
        profissao.style.opacity = 1;
}

function desabilitaCampos(){
    nome.setAttribute('disabled', true);
    nome.style.opacity = .2;
    natural.setAttribute('disabled', true);
    natural.style.opacity = .2;
    profissao.setAttribute('disabled', true);
    profissao.style.opacity = .2;  
}