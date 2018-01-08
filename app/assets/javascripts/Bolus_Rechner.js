


//Standard Data for a 3 Year old child
let dFakTni = 0.5; 
let faKtmor = 1.3;
let faKtnoon = 0.8;
let fakTeven = 0.5;

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();

let uhrZeit = function zeit() {
    //if (h < 10) { h = '0' + h; }
    if (m < 10) { m = '0' + m; }
    return (h + ":" + m + " Uhr");
}

function time(){
    let uHr = document.getElementById("Uhrzeit");
    uHr.innerHTML = "Es ist " + uhrZeit() + ".";
}
// Displaying the Timebased carbohydrate Faktor (BE-Faktor) and the actual time inside the form and htmluhrzeit document.addEventListener("turbolinks:load", 
function timeFakt() {

    time();
    
    let beFaktor = document.getElementById("faktor");
    if (h > 20 || h < 6) {
     beFaktor.value = dFakTni;
     
    }
    else if (h >= 6 && h < 11) {
     beFaktor.value = faKtmor;
    
    }
 
    else if (h >= 11 && h < 18) {
     beFaktor.value = faKtnoon;
     
    }
    else if (h >= 18 && h <= 20) {
        beFaktor.value = fakTeven;
     
 }

};
//not the optimum solution. No idea how to get it to work with turbolinks in another way though
document.addEventListener("turbolinks:load", timeFakt);
// Possibiltiy to change the carbohydrate factor (BE Faktor)

function faktorAendern() {
    let beFaktor = document.getElementById("faktor");
    
    if (h > 20 || h < 6) {

     dFakTni = beFaktor.value;
    }
    else if (h >= 6 && h < 11) {

        faKtmor = beFaktor.value;
    }

    else if (h >= 11 && h < 18) {

        faKtnoon = beFaktor.value;
    }
    else if (h >= 18 && h <= 20) {

        fakTeven = beFaktor.value;
    };

    
};

// Calculation of the needed insulin for the amount of carbohydrates eaten

function insulinBerechnen() {

    let eat = document.getElementById("be").value;
    let uLin = document.getElementById("insulin");
    let prod1 = (eat * dFakTni).toFixed(2);
    let prod2 = (eat * faKtmor).toFixed(2);
    let prod3 = (eat * faKtnoon).toFixed(2);
    let prod4 = (eat * fakTeven).toFixed(2);

    if (h > 20 || h < 6) {

        uLin.innerHTML = prod1.toString();
    }
    else if (h >= 6 && h < 11) {

        uLin.innerHTML = prod2.toString();
    }

    else if (h >= 11 && h < 18) {

        uLin.innerHTML = prod3.toString();
    }
    else if (h >= 18 && h <= 20) {

        uLin.innerHTML = prod4.toString();
    };

};


