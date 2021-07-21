window.onload = function () {
    document.getElementById("txtBoxIpt").focus();

    //Chamada da funcao caso o botao for apertado

    document.getElementById("bMaiusculo").onclick = function () {//Maiusculo
        maiusculo()
    };

    document.getElementById("bMinusculo").onclick = function () { //Minusculo
        minusculo()
    };

    document.getElementById("bPmaiusculo").onclick = function() {//Primeira Letra Maiuscula
        var txt = document.getElementById("txtBoxIpt");
        var txtAlterado = pMaiusculo(txt);
        document.getElementById("txtBoxIpt").value = txtAlterado;
    };
    document.getElementById("bPminusculo").onclick = function() {//Primeira Letra Minuscula
        var txt = document.getElementById("txtBoxIpt");
        var txtAlterado = pMinuscula(txt);
        document.getElementById("txtBoxIpt").value = txtAlterado;
    };
    document.getElementById("bAlternada").onclick = function() {//Texto ao Alternada
        var txt = document.getElementById("txtBoxIpt");
        var txtAlterado = textoAlternado(txt);
        document.getElementById("txtBoxIpt").value = txtAlterado;
    };
    document.getElementById("bContrario").onclick = function() {//Texto ao Contrario
        var txt = document.getElementById("txtBoxIpt");
        var txtAlterado = textoContrario(txt);
        document.getElementById("txtBoxIpt").value = txtAlterado;
    };

    document.getElementById("bCopiar").onclick = function () {//ClipBoard
        copiarTexto();
    }
    
    document.getElementById("bLimpar").onclick = function(){//Limpar TextArea
        document.getElementById("txtBoxIpt").value = "";
        document.getElementById("txtBoxIpt").value = "";
    }

    //Buttons Tema
    document.getElementById("btn-tema01").onclick = function(){
        document.documentElement.style.setProperty('--cor-principal', '#2b729b');
        document.documentElement.style.setProperty('--cor-principal-hover-1', '#2b9b88');
        document.documentElement.style.setProperty('--cor-principal-hover-2', '#2b9b70');
        document.documentElement.style.setProperty('--cor-principal-hover-3', '#2b589b');
        document.documentElement.style.setProperty('--cor-principal-hover-4', '#562b9b');
    }
    document.getElementById("btn-tema02").onclick = function () {
        document.documentElement.style.setProperty('--cor-principal', '#1e8562');
        document.documentElement.style.setProperty('--cor-principal-hover-1', '#161616');
        document.documentElement.style.setProperty('--cor-principal-hover-2', '#346751');
        document.documentElement.style.setProperty('--cor-principal-hover-3', '#C84B31');
        document.documentElement.style.setProperty('--cor-principal-hover-4', '#ECDBBA');
    }
    document.getElementById("btn-tema03").onclick = function () {
        document.documentElement.style.setProperty('--cor-principal', '#912929');
        document.documentElement.style.setProperty('--cor-principal-hover-1', '#CE2525');
        document.documentElement.style.setProperty('--cor-principal-hover-2', '#FF6600');
        document.documentElement.style.setProperty('--cor-principal-hover-3', '#F1C550');
        document.documentElement.style.setProperty('--cor-principal-hover-4', '#76eec6');
    }

};

function maiusculo(){
    var txt = document.getElementById("txtBoxIpt");
    document.getElementById("txtBoxIpt").value = txt.value.toUpperCase();
}

function minusculo() {
    var txt = document.getElementById("txtBoxIpt");
    document.getElementById("txtBoxIpt").value = txt.value.toLowerCase();
}

function pMaiusculo(text) {
    var palavra = text.value.toLowerCase().split(" ");
    for (var a = 0; a < palavra.length; a++) {
        var p = palavra[a];

        var primeiraLetra = p[0];
        p = primeiraLetra.toUpperCase() + p.slice(1);

        palavra[a] = p;
    }
    return palavra.join(" ");
}

function pMinuscula(text) {
    var palavra = text.value.toUpperCase().split(" ");
    for (var a = 0; a < palavra.length; a++) {
        var p = palavra[a];

        var primeiraLetra = p[0];
        p = primeiraLetra.toLowerCase() + p.slice(1);

        palavra[a] = p;
    }
    return palavra.join(" ");
}

function textoAlternado(text){
    var txtAlterado = "";
    var palavra = text.value.toLowerCase();
    for (var a = 0; a < palavra.length; a++) {
        if(a % 2 ==0){
         txtAlterado += palavra.substring(a, a + 1).toUpperCase();
        }
        else{
            txtAlterado += palavra.substring(a, a + 1);
        }
    }
    return txtAlterado;
}

function copiarTexto() {
    
    let textArea = document.getElementById("txtBoxIpt");
    textArea.select();
    document.execCommand('copy');


}

function textoContrario(text) {
    var txtAlterado = "";
    for (var a = text.value.length; a > 0; a--) {
        txtAlterado += text.value.substring(a ,a -1); 
    }
    return txtAlterado;
}

