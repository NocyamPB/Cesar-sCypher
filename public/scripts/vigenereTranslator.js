const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function verificarLetra(letra){
    let i = 0;
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

function criptografar(){
    var mensagem = document.querySelector('#txt-mensagem').value.toLowerCase();
    var chave = document.querySelector('#chave').value.toLowerCase();
    var resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
        for (let j = 0; j < chave.length; j++) {
            let numLetra = verificarLetra(mensagem.charAt(i));
            let numChave = verificarLetra(chave.charAt(j));
            if(numLetra!=null && numChave!=null){
                let novaLetra = numLetra + numChave;
                if(novaLetra >= 26){
                    novaLetra-=alfabeto.length;
                }
                resultado += alfabeto[novaLetra];
                if(j+1 != chave.length){
                    i++;
                }
            }else if(numLetra == null){
                resultado += mensagem.charAt(i);
                i++;
                j--;
            }else{
                resultado += mensagem.charAt(i);
                if(j+1 != chave.length){
                    i++;
                }
            }
            if(i>=mensagem.length){
                break;
            }
        }
    }
    
    document.querySelector('#txt-resultado').innerHTML = resultado;
}

function descriptografar(){
    var mensagem = document.querySelector('#txt-mensagem').value.toLowerCase();
    var chave = document.querySelector('#chave').value.toLowerCase();
    var resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
        for (let j = 0; j < chave.length; j++) {
            let numLetra = verificarLetra(mensagem.charAt(i));
            let numChave = verificarLetra(chave.charAt(j));
            if(numLetra!=null && numChave!=null){
                let novaLetra = numLetra - numChave;
                if(novaLetra <= -1){
                    novaLetra+=alfabeto.length;
                }
                resultado += alfabeto[novaLetra];
                if(j+1 != chave.length){
                    i++;
                }
            }else if(numLetra == null){
                resultado += mensagem.charAt(i);
                i++;
                j--;
            }else{
                resultado += mensagem.charAt(i);
                if(j+1 != chave.length){
                    i++;
                }
            }
            if(i>=mensagem.length){
                break;
            }
        }
    };
    document.querySelector('#txt-resultado').innerHTML = resultado;
}