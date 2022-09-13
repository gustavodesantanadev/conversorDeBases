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

        resultBin.innerHTML =`${bin}`;

        resultOct.innerHTML =`${oct}`;

        resultHex.innerHTML =`${hex}`;
}

function cleanResult(){

    resultBin.innerHTML =``;

    resultOct.innerHTML =``;

    resultHex.innerHTML =``;
}