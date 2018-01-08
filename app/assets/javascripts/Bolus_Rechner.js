


//Standard Data for a 3 Year old child



function currentMinutes(){
    let date = new Date();
    return date.getMinutes();
}
function currentHours(){
    let date = new Date();
    return date.getHours();
}
function time() {
    let hours = currentHours()
    let minutes = currentMinutes()
    if (hours < 10) { hours = '0' + hours; }
    if (minutes < 10) { minutes = '0' + minutes; }
    return (hours + ":" + minutes + "Uhr");
}

function showTime(){
    let uHr = document.getElementById("Uhrzeit");
    uHr.innerHTML = "Es ist " + time() + ".";
}
// Displaying the Timebased carbohydrate Faktor (BE-Faktor) and the actual time inside the form and htmluhrzeit document.addEventListener("turbolinks:load", 
function timeFakt() {
    let hours = currentHours()
    showTime();
    let beFactorNight = 0.5; 
    let beFactorMorning = 1.3;
    let beFactorNoon = 0.8;
    let beFactorEvening = 0.5;

    let beFactor = document.getElementById("faktor");
    if (hours > 20 || hours < 6) {
     beFactor.value = beFactorNight;
     
    }
    else if (hours >= 6 && hours < 11) {
     beFactor.value = beFactorMorning;
    
    }
 
    else if (hours >= 11 && hours < 18) {
     beFactor.value = beFactorNoon;
     
    }
    else if (hours >= 18 && hours <= 20) {
        beFactor.value = beFactorEvening;
     
 }

};
document.addEventListener("turbolinks:load", timeFakt);
// Possibiltiy to change the carbohydrate factor (BE Faktor)

function faktorAendern() {
    let beFactorNight = 0.5; 
    let beFactorMorning = 1.3;
    let beFactorNoon = 0.8;
    let beFactorEvening = 0.5;
    let beFaktor = document.getElementById("faktor");
    let hours = currentHours()
    if (hours > 20 || hours < 6) {

        beFactorNight = beFaktor.value;
    }
    else if (hours >= 6 && hours < 11) {

        beFactorMorning = beFaktor.value;
    }

    else if (hours >= 11 && hours < 18) {

        beFactorNoon = beFaktor.value;
    }
    else if (hours >= 18 && hours <= 20) {

        beFactorEvening = beFaktor.value;
    };

    
};

// Calculation of the needed insulin for the amount of carbohydrates eaten

function insulinBerechnen() {
    let beFaktor = document.getElementById("faktor");
    let beFactorNight = 0.5; 
    let beFactorMorning = 1.3;
    let beFactorNoon = 0.8;
    let beFactorEvening = 0.5;
    let eat = document.getElementById("be").value;
    let uLin = document.getElementById("insulin");
    let prod1 = (eat * beFactorNight).toFixed(2);
    let prod2 = (eat * beFactorMorning).toFixed(2);
    let prod3 = (eat * beFactorNoon).toFixed(2);
    let prod4 = (eat * beFactorEvening).toFixed(2);
    let hours = currentHours()
    if (hours > 20 || hours < 6) {

        uLin.innerHTML = prod1.toString();
    }
    else if (hours >= 6 && hours < 11) {

        uLin.innerHTML = prod2.toString();
    }

    else if (hours >= 11 && hours < 18) {

        uLin.innerHTML = prod3.toString();
    }
    else if (hours >= 18 && hours <= 20) {

        uLin.innerHTML = prod4.toString();
    };

};


