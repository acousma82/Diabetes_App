
function Patient (surname, lastname, ) {

this.surname = surname;
this.lastname = lastname;
this.addfaktoren = function (uhr1, uhr2, befakt){
return [uhr1, uhr2, befakt];
};

};

let uHr = document.getElementById("Uhrzeit");

let fakTni = 0.5;
let faKtmor = 1.3;
let faKtnoon = 0.8;
let fakTeven = 0.5;
let beFaktor = document.getElementById("faktor");
let fakAkt = document.getElementById("fakAkt");
let fakNew = document.getElementById("fakNew")
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let uhrZeit = function zeit() {
    if (h < 10) { h = '0' + h; }
    if (m < 10) { m = '0' + m; }
    return (h + ":" + m + " Uhr");
}

 uHr.innerHTML = "Es ist " + uhrZeit() + ".";

// Anzeige des Uhrzeitabhängigen BE-Faktors für den aktuellen Patienten

if (h > 20 || h < 6) {
    fakAkt.innerHTML = fakTni.toString();
}
else if (h >= 6 && h < 11) {
    fakAkt.innerHTML = faKtmor.toString();
}

else if (h >= 11 && h < 18) {
    fakAkt.innerHTML = faKtnoon.toString();
}
else if (h >= 18 && h <= 20) {
    fakAkt.innerHTML = fakTeven.toString();
};

// Möglichkeit den BE-faktor für die aktuell gegessenen BEs(also temporär) zu ändern

function fakaendern() {

    if (h > 20 || h < 6) {

        fakTni = beFaktor.value;
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

    fakNew.innerHTML = (beFaktor.value).toString();
};



// Berechnung des benötigten Insulins für die eingegebene Menge an BEs

function insBerechnen() {

    let eat = document.getElementById("be").value;

    let uLin = document.getElementById("insulin");



    let prod1 = (eat * fakTni).toFixed(2);
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

/* Plan: Funktion um BE Faktoren dauerhaft zu aendern. Konstruktorfunktion für Patientendatei. In die Patientendatei muss: (BE Faktoren für verschiedene Zeitspannen, die Anzahl der Zeitspannen ist variabel; Die Möglichkeit Zeitspannen im Nachhinein hinzuzufügen bzw. zu ändern; Die Gesamtmenge an BAsalinsulin; die aktuelle MEnge des am jeweiligen Tag bei Aufruf der Datei bekommenes Insulin. Nach Abschluss des Tages Speicherung des Gesamttagesinsulin in der Datei*/
