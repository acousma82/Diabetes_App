
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
};

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
   
    bu_json = gon.bu_factors
    if (bu_json == null) {return};
    let factorJson = JSON.parse(gon.bu_factors);

    let hours = currentHours();
    

    let beFactor = document.getElementById("faktor");
    //checking if the id exists on the page
    if (beFactor === null){return}
    switch (hours) {
        case 0:
            beFactor.value = factorJson.zero_till_one;
            break;
        case 1:
            beFactor.value = factorJson.one_till_two;
            break;
        case 2:
            beFactor.value = factorJson.two_till_three;
            break;
        case 3:
            beFactor.value = factorJson.three_till_four;
            break;
        case 4:
            beFactor.value = factorJson.four_till_five;
            break;
        case 5:
            beFactor.value = factorJson.five_till_six;
            break;
        case 6:
            beFactor.value = factorJson.six_till_seven;
            break;
        case 7:
            beFactor.value = factorJson.seven_till_eight;
            break;
        case 8:
            beFactor.value = factorJson.eight_till_nine;
            break;
        case 9:
            beFactor.value = factorJson.nine_till_ten;
            break;
        case 10:
            beFactor.value = factorJson.ten_till_eleven;
            break;
        case 11:
            beFactor.value = factorJson.eleven_till_twelve;
            break;
        case 12:
            beFactor.value = factorJson.twelve_till_thirteen;
            break;
        case 13:
            beFactor.value = factorJson.thirteen_till_fourteen;
            break;
        case 14:
            beFactor.value = factorJson.fourteen_till_fifteen;
            break;
        case 15:
            beFactor.value = factorJson.fifteen_till_sixteen;
            break;
        case 16:
            beFactor.value = factorJson.sixteen_till_seventeen;
            break;
        case 17:
            beFactor.value = factorJson.seventeen_till_eightteen;
            break;
        case 18:
            beFactor.value = factorJson.eightteen_till_nineteen;
            break;
        case 19:
            beFactor.value = factorJson.ninetteen_till_twenty;
            break;
        case 20:
            beFactor.value = factorJson.twenty_till_twentyone;
            break;
        case 21:
            beFactor.value = factorJson.twentyone_till_twentytwo;
            break;
        case 22:
            beFactor.value = factorJson.twentytwo_till_twentythree;
            break;
        case 23:
            beFactor.value = factorJson.twentythree_till_zero;
            break;
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

