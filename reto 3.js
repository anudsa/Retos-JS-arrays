//Imprimir los números de 1 a n entre [] con while.
function imprimeCorchetes(num){
    let contador=1;
    const lista=[];
    while (contador<=num){
        lista.length=num;
        lista[contador-1]="["+contador+"]";
        contador++;
    }
    console.log(lista);
}
imprimeCorchetes(6);