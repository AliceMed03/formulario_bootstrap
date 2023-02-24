function calcular(){
    if(validaDescricao() && validaQuantidade() && validaUnitario()) { //ir vai verificar se é true ou false e vai executar caso seja true.
        let nTotal = quantidade.value * unitario.value; //.value é necessário pois significa que vc vai pegar o valor.
        total.value = nTotal; 
    }
}

function validaDescricao(){
    //verifica se o campo esta vazio.
    if(descricao.value.trim() === "" ) {//.trim é para tirar os espaços / === para comparação.
        descricao.style.background = "yellow";
        mensagem.innerHTML = "Preencha a descrição do produto!"; // inerHTML é para inserir algo no HTML, atualiza o HTML.
        $('#alerta').modal('show'); //$ quer dizer que vou puxar um identificador('#') a palavra que estiver ali ele vai buscar no HTML.
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