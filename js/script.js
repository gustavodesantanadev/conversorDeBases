/*
    Variavel responsavel em pegar o
    valor do input
*/ 
var decimal = 0;

function convertBase(){
    decimal = Number(inpDecimal.value);

        let bin = decimal.toString(2);
        let oct = decimal.toString(8);
        let hex = decimal.toString(16);

        resultBin.innerHTML =`<span class="bold bigText"> Binário</span> <br> 
                                <span class="bold bigText">${bin}</span>`;

        resultOct.innerHTML =`<span class="bold bigText"> Octal</span> <br> 
                                <span class="bold bigText">${oct}</span>`;

        resultHex.innerHTML =`<span class="bold bigText"> Hexadecimal</span> <br> 
                                <span class="bold bigText">${hex}</span>`;
}

function cleanResult(){

    resultBin.innerHTML =``;

    resultOct.innerHTML =``;

    resultHex.innerHTML =``;
}