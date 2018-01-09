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
    return (hours + ":" + minutes + " Uhr");
}

function showTime(){
    let uHr = document.getElementById("Uhrzeit");
    //checking if the id exists on the page
    if (uHr === null){return}
    uHr.innerHTML = "Es ist " + time() + ".";
}
// Displaying the Timebased carbohydrate Faktor (BE-Faktor) and the actual time inside the form and html
function timeFakt() {
    showTime();
    let hours = currentHours()
    let beFactorNight = 0.5; 
    let beFactorMorning = 1.3;
    let beFactorNoon = 0.8;
    let beFactorEvening = 0.5;

    let beFactor = document.getElementById("faktor");
    //checking if the id exists on the page
    if (beFactor === null){return}
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
window.addEventListener("turbolinks:load", timeFakt);

// Calculation of the needed insulin for the amount of carbohydrates eaten

function insulinBerechnen() {
    //Form validation and checking if the ids exist on the page
    let eat = document.getElementById("be").value;
    if( eat <= 0){
        alert("If the carbs you ate are zero or below you don't need any insulin ;-)"); 
        return};
    let beFaktor = document.getElementById("faktor");
    if (beFaktor === null){return};
    if( beFaktor.value <= 0){
        alert("Enter a Valid factor bigger than 0"); 
        return};
   
    let uLin = document.getElementById("insulin");
    
    //calculating the Insulin according to the time of day
    let hours = currentHours()
    if (hours > 20 || hours < 6) {
        if (beFaktor.value === ""){beFactorNight = 0.5}
        else {beFactorNight = beFaktor.value};
        uLin.innerHTML = (eat * beFactorNight).toFixed(2).toString();
    }
    else if (hours >= 6 && hours < 11) {
        if (beFaktor.value === ""){beFactorMorning = 1.3}
        else {beFactorMorning = beFaktor.value};
        uLin.innerHTML = (eat * beFactorMorning).toFixed(2).toString();
    }

    else if (hours >= 11 && hours < 18) {
        if (beFaktor.value === ""){beFactorNoon = 0.8}
        else {beFactorNoon = beFaktor.value};
        uLin.innerHTML = (eat * beFactorNoon).toFixed(2).toString();
    }
    else if (hours >= 18 && hours <= 20) {
        if (beFaktor.value === ""){beFactorEvening = 0.8}
        else {beFactorEvening = beFaktor.value};
        uLin.innerHTML = (eat * beFactorEvening).toFixed(2).toString();
    };

};


