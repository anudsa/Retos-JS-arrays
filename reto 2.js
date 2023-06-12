//Imprima el valor de xValue, disminuyéndolo 0.5 cada vez, siempre que siga siendo positivo.
let xValue=5;
function disminuir(xValue){
    while(xValue>=0){
        console.log("xValue = "+xValue);
        xValue-=.5;
    }
}
disminuir(xValue);