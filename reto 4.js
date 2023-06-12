//Hacer función gral y flecha con while que halle la suma de 1 a n.
//General
function general(numGeneral){
    let sumaGeneral=0;
    let contadorGeneral=0;
    while(contadorGeneral<=numGeneral){
        sumaGeneral+=contadorGeneral;
        contadorGeneral++;
    }
    console.log(sumaGeneral);
}
general(5);
//Flecha
const Flecha = numFlecha => {
    let sumaFlecha=0;
    let contadorFlecha=0;
    while(contadorFlecha<=numFlecha){
        sumaFlecha+=contadorFlecha;
        contadorFlecha++;
    }
    console.log(sumaFlecha);
}
Flecha(19);
