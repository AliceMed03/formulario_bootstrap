function calcular(){
    if(validaN1() && validaN2() && validaN3() && validaN4()) { 
        let nTotal = (parseFloat(numero1.value) + parseFloat(numero2.value) + parseFloat(numero3.value) + parseFloat(numero4.value)) / 4; 
        total.value = nTotal; 
        
    }
}

function validaN1(){
    //verifica se o campo esta vazio.
    if(numero1.value.trim() === "" ) {
        numero1.style.background = "yellow";
        mensagem.innerHTML = "Preencha o campo Número 1!"; 
        $('#alerta').modal('show'); 
        return false;
    } else{
        numero1.style.background = "white";
        return true;
    }
}

function validaN2(){
    //verifica se o campo esta vazio.
    if(numero2.value.trim() === "" ) {
        numero2.style.background = "yellow";
        mensagem.innerHTML = "Preencha o campo Número 2!"; 
        $('#alerta').modal('show'); 
        return false;
    } else{
        numero2.style.background = "white";
        return true;
    }
}

function validaN3(){
    //verifica se o campo esta vazio.
    if(numero3.value.trim() === "" ) {
        numero3.style.background = "yellow";
        mensagem.innerHTML = "Preencha o campo Número 3!"; 
        $('#alerta').modal('show'); 
        return false;
    } else{
        numero3.style.background = "white";
        return true;
    }
}

function validaN4(){
    //verifica se o campo esta vazio.
    if(numero4.value.trim() === "" ) {
        numero4.style.background = "yellow";
        mensagem.innerHTML = "Preencha o campo Número 4!"; 
        $('#alerta').modal('show'); 
        return false;
    } else{
        numero4.style.background = "white";
        return true;
    }
}

