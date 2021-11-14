window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal2);
function reveal2(){
    var reveals = document.querySelectorAll('.reveal2');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal3);
function reveal3(){
    var reveals = document.querySelectorAll('.reveal3');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

function enviaremail() {
    var vemail = email.value;
    var vas = assunto.value;
    var vnome = nome.value;
    var vmsg = mensagem.value;
    
    if (vnome.length == 0) {
        alert('Nome incorreto');
    }

    if (vas.length < 10) {
        alert('Defina um assunto maior');
    }

    if (vmsg.length < 15) {
        alert('Mensagem muito pequena!');
    }

    if (vemail.indexOf('@') == -1 || vemail.length < 8 || vemail.indexOf('.') == -1) {
        alert('Email Inválido!');
    }

    if (nome.value.length > 0){
        if (assunto.value.length >= 10) {
            if (mensagem.value.length >= 15) {
                if (vemail.indexOf('@') != -1 && vemail.length >= 8 && vemail.indexOf('.') != -1) {
                    alert("Sua mensagem foi enviada com sucesso! A Wegrowffee agradece o contato!");
                    window.location.href = '#home';
                }
            }
        }
    }
   
}