const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function criptografar(){
    var mensagem = document.querySelector('#txt-mensagem').value.toLowerCase();
    var chave = parseInt(document.querySelector('#chave').value);
    var resultado = "";
    for(let i = 0; i <= mensagem.length; i++){
        let numLetra = verificarLetra(mensagem.charAt(i));
        if(numLetra!=null){
            let novaLetra = numLetra + chave;
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
    var chave = parseInt(document.querySelector('#chave').value);
    var resultado = "";
    for(let i = 0; i <= mensagem.length; i++){
        let numLetra = verificarLetra(mensagem.charAt(i));
        if(numLetra!=null){
            let novaLetra = numLetra - chave;
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