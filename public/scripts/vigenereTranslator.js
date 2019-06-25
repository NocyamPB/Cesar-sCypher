const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function criptografar(){
    var mensagem = document.querySelector('#txt-mensagem').value.toLowerCase();
    var chave = document.querySelector('#chave').value.toLowerCase();
    var chaveCompleta = "";
    var resultado = "";
    for (let i = 0; i <= mensagem.length; i++) {
        for (let j = 0; j <= chave.length; j++) {
            if(verificarLetra(mensagem.charAt(i))){
                chaveCompleta += " ";
                i++;
            }else{
                chaveCompleta += chave.charAt(j);
                i++;
            }
        }
    };
    for(let i = 0; i <= mensagem.length; i++){
        let numLetra = verificarLetra(mensagem.charAt(i));
        let numChave = verificarLetra(chaveCompleta.charAt(i));
        if(numLetra!=null && numChave!=null){
            let novaLetra = numLetra + numChave;
            if(novaLetra>=26){
                novaLetra-=alfabeto.length;
            }
            resultado += alfabeto[novaLetra];
        }else{
            resultado += mensagem.charAt(i);
        }
    }
    document.querySelector('#txt-resultado').innerHTML = resultado;
}

function verificarLetra(letra){
    var i = 0;
    while(true){
        if(i<alfabeto.length){
            if(alfabeto[i] == letra){
                return i;
            }else{
                i++;
            }
        }else{
            return null;
        }
    }
}

function descriptografar(){
    var mensagem = document.querySelector('#txt-mensagem').value.toLowerCase();
    var chave = document.querySelector('#chave').value.toLowerCase();
    var chaveCompleta = "";
    var resultado = "";
    for (let i = 0; i <= mensagem.length; i++) {
        for (let j = 0; j <= chave.length; j++) {
            if(verificarLetra(mensagem.charAt(i))){
                chaveCompleta += " ";
                i++;
            }else{
                chaveCompleta += chave.charAt(j);
                i++;
            }
        }
    };
    for(let i = 0; i <= mensagem.length; i++){
        let numLetra = verificarLetra(mensagem.charAt(i));
        let numChave = verificarLetra(chaveCompleta.charAt(i));
        if(numLetra!=null && numChave!=null){
            let novaLetra = numLetra - numChave;
            if(novaLetra<=-1){
                novaLetra+=alfabeto.length;
            }
            resultado += alfabeto[novaLetra];
        }else{
            resultado += mensagem.charAt(i);
        }
    }
    document.querySelector('#txt-resultado').innerHTML = resultado;
}