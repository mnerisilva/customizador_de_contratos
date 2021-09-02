const areaTexto = document.querySelector('.area-texto');
const check = document.querySelector('.form-check input');
const nome = document.querySelector('.form #name');
const natural = document.querySelector('.form #natural');
const profissao = document.querySelector('.form #prof');
const cpf = document.querySelector('.form #cpf');

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
        cpf.removeAttribute('disabled', true);
        cpf.style.opacity = 1;
}

function desabilitaCampos(){
    nome.setAttribute('disabled', true);
    nome.style.opacity = .2;
    natural.setAttribute('disabled', true);
    natural.style.opacity = .2;
    profissao.setAttribute('disabled', true);
    profissao.style.opacity = .2;
    cpf.setAttribute('disabled', true);
    cpf.style.opacity = .2;  
}



function exportHTML(){
    let header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
   let footer = "</body></html>";
   let html = document.getElementById("source-html").innerHTML;
   let sourceHTML = header+html+footer;
   
   let source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
   let fileDownload = document.createElement("a");
   document.body.appendChild(fileDownload);
   fileDownload.href = source;
   fileDownload.download = 'document.doc';
   fileDownload.click();
   document.body.removeChild(fileDownload);
}