window.onload = function () {
    //Chamada da funcao caso o botao for apertado
    document.getElementById("bMaiusculo").onclick = function() {maiusculo()};//Maiusculo
    document.getElementById("bMinusculo").onclick = function() { minusculo()};//Minusculo
    document.getElementById("bPmaiusculo").onclick = function() {//Primeira Letra Maiuscula
        var txt = document.getElementById("txtBoxIpt");
        var txtAlterado = pMaiusculo(txt);
        document.getElementById("dTxtBox").innerHTML = txtAlterado;
    };
    document.getElementById("bPminusculo").onclick = function() {//Primeira Letra Minuscula
        var txt = document.getElementById("txtBoxIpt");
        var txtAlterado = pMinuscula(txt);
        document.getElementById("dTxtBox").innerHTML = txtAlterado;
    };
    document.getElementById("bAlternada").onclick = function() {//Texto ao Alternada
        var txt = document.getElementById("txtBoxIpt");
        var txtAlterado = textoAlternado(txt);
        document.getElementById("dTxtBox").innerHTML = txtAlterado;
    };
    document.getElementById("bContrario").onclick = function() {//Texto ao Contrario
        var txt = document.getElementById("txtBoxIpt");
        var txtAlterado = textoContrario(txt);
        document.getElementById("dTxtBox").innerHTML = txtAlterado;
    };
    document.getElementById("bCopiar").onclick = function(){
        copiarTexto();
    }
    document.getElementById("bLimpar").onclick = function(){
        document.getElementById("txtBoxIpt").value = "";
        document.getElementById("dTxtBox").innerHTML = "";
    }

};

function maiusculo(){
    var txt = document.getElementById("txtBoxIpt");
    document.getElementById("dTxtBox").innerHTML = txt.value.toUpperCase();
}

function minusculo() {
    var txt = document.getElementById("txtBoxIpt");
    document.getElementById("dTxtBox").innerHTML = txt.value.toLowerCase();
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
    var copyText = document.getElementById("dTxtBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

function textoContrario(text) {
    var txtAlterado = "";
    for (var a = text.value.length; a > 0; a--) {
        txtAlterado += text.value.substring(a ,a -1); 
    }
    return txtAlterado;
}

