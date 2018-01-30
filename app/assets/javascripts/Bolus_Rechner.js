$(window).on("turbolinks:load", timeFakt);
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

function currentSeconds(){
    let date = new Date();
    return date.getSeconds();
}
function time() {
    let hours = currentHours()
    let minutes = currentMinutes()
    let seconds = currentSeconds()
    if (hours < 10) { hours = '0' + hours; }
    if (minutes < 10) { minutes = '0' + minutes; }
    if (seconds < 10) { seconds = '0' + seconds; }
    return (hours + ":" + minutes + ":" + seconds + " h" );
}

function showTime(){
    let uHr = document.getElementById("Uhrzeit");
    //checking if the id exists on the page
    if (uHr === null){return}
    uHr.innerHTML = "It is " + time() + ".";
}

// Displaying the Timebased carbohydrate Faktor (BE-Faktor) and the actual time inside the form and html
function timeFakt() {
    setInterval(showTime,1);
    bu_json = gon.bu_factors
    if (bu_json == null) {return};
    let factorJson = JSON.parse(gon.bu_factors);
    let hours = currentHours();
    let beFactor = document.getElementById("faktor");
    //checking if the id exists on the page
    if (beFactor === null){return};
   
    
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
            beFactor.value = factorJson.nineteen_till_twenty;
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


// Calculation of the additional insulin needed when Bloodsugar before a meal is to high
function correctBloodSugar() {
    let bloodsugar = document.getElementById("bloodsugar")
    let corrInsulin = document.getElementById("corrinsulin")
    if(bloodsugar === null){return};
    // to be substituted by saved settings from the database
    let bsSettings = JSON.parse(gon.bs_settings);
    let bsMax = bsSettings.bs_max;
    let bsTarget = bsSettings.bs_target;
    let correction_number = bsSettings.correction_number;
    let correction_insulin = bsSettings.correction_insulin;
    let addInsulin = 0;
    let bsDiff =  (bloodsugar.value - bsTarget)
    if (bloodsugar.value > bsMax){
        addInsulin = Math.round(((bsDiff/correction_number)* correction_insulin)*100)/100;
        console.log(addInsulin);
        corrInsulin.innerHTML = "Your Bloodsugar is " + bsDiff + " mg/dl too high. " + addInsulin + " U Insulin were added.";
        return addInsulin;
    }
    else {
        return addInsulin;
    };
  
    

}
// Calculation of the needed insulin for the amount of carbohydrates eaten
function insulinBerechnen() {
    //Form validation and checking if the ids exist on the page
    let eat = document.getElementById("be").value;
    if (eat === null){return};
    let bloodsugar = document.getElementById("bloodsugar").value
    if( eat <= 0 && bloodsugar <= 0 ){
        alert("If the carbs you ate are zero or below you don't need any insulin ;-)"); 
        return};
    let beFaktor = document.getElementById("faktor");
    if (beFaktor === null){return};
    if( beFaktor.value <= 0){
        alert("Enter a Valid factor bigger than 0"); 
        return};
    
    let tLin = document.getElementById("insulin");
    let mLin = document.getElementById("mealinsulin");
    let insulinTodb = document.getElementById("insulinTodb");
    let adInsulin = document.getElementById("adInsulin").value;
    console.log(typeof adInsulin);
    //if (insulintodb === null){return};
    let addInsulin = correctBloodSugar();
    console.log(typeof addInsulin);
    let mealInsulin = (eat * beFaktor.value);
    console.log(typeof mealInsulin); 
    let insulinSum = mealInsulin + addInsulin + parseFloat(adInsulin);
    console.log(typeof insulinSum);
    mLin.innerHTML = mealInsulin.toFixed(2);
    tLin.innerHTML = insulinSum.toFixed(2);
    insulinTodb.value = (eat * beFaktor.value + addInsulin + parseFloat(adInsulin)).toFixed(2);
    
};

