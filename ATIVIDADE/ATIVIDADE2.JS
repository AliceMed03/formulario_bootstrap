function calcular(){
    if(validaDescricao() && validaQuantidade() && validaUnitario() && validaDesconto()) { 
        let totalv = quantidade.value * unitario.value
        let nTotal = (quantidade.value * unitario.value) - (totalv*desconto.value/100); 
        total.value = nTotal; 
        
    }
}

function validaDescricao(){
    //verifica se o campo esta vazio.
    if(descricao.value.trim() === "" ) {
        descricao.style.background = "yellow";
        mensagem.innerHTML = "Preencha a descrição do produto!"; 
        $('#alerta').modal('show'); 
        return false;
    } else{
        descricao.style.background = "white";
        return true;
    }
}

function validaQuantidade(){
    if(quantidade.value.trim() === "" ) {
        quantidade.style.background = "yellow";
        mensagem.innerHTML = "Preencha a quantidade do produto!" ;
        $('#alerta').modal('show'); 
        return false;
    } else{ 
        if(quantidade.value > 0 && quantidade.value <=1000){
        quantidade.style.background = "white";
        return true;
        }else{
        quantidade.style.background = "yellow";
        mensagem.innerHTML = "O valor da quantidade deve estar entre 1 e 1000!" ;
        $('#alerta').modal('show'); 
        return false;
        }
    }
}

function validaUnitario(){
    if(unitario.value.trim() === "" ) {
        unitario.style.background = "yellow";
        mensagem.innerHTML = "Preencha o preço unitário do produto!" ;
        $('#alerta').modal('show'); 
        return false;
    } else{
        unitario.style.background = "white";
        return true;
    }
}

function validaDesconto(){
    if(desconto.value.trim() === "" ) {
        desconto.style.background = "yellow";
        mensagem.innerHTML = "Preencha a porcentagem do desconto!" ;
        $('#alerta').modal('show'); 
        return false;
    } else{
        desconto.style.background = "white";
        return true;
    }
}