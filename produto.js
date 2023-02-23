function calcular(){
    validaDescricao()
    let nTotal = quantidade.value * unitario.value; //.value é necessário pois significa que vc vai pegar o valor
    total.value = nTotal;  
}

function validaDescricao(){
    if(descricao.value.trim() === "" ) {//.trim é para tirar os espaços / === para comparação
    descricao.style.background = "yellow";
    mensagem.innerHTML = "Preencha a descrição do produto!" // inerHTML é para inserir algo no HTML, atualiza o HTML
    $('#alerta').modal('show'); //$ quer dizer que vou puxar um identificador('#') a palavra que estiver ali ele vai buscar no HTML
} else{
    descricao.style.background = "white";
}
}