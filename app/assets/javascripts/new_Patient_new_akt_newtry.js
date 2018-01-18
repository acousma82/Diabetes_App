
var zeitFaktor = new Map();

let textbefaktoren = "<Td><div class='form-group'><div class='col-md-12'><input type = 'number' value='' class = 'clsFaktor' id = '";
let thead = "<Thead><Tr><div class='row'><Th> Uhrzeit</th><Th class='text-center'>Faktor</th></tr></Thead>";

function colMdX(param) {
    // funktion um abschnitte mit variabler Colum Anzahl zu erstellen
    document.write("<div class='col-md-" + param + "'>");
}


 
function createform() {

    document.write("<div class = 'container' id='befactors'>");
    document.write("<form>")

    document.write("<div class='row'>");

    // Vormittag, 7 bis 11 Uhr
    colMdX(3);
    document.write("<Table class='table table-Condensed' id='daten'>");
    document.write(thead);
    document.write("<Tbody>");

    for (ix = 7; ix < 12; ix++) {
        let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-2'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
        zeitFaktor.set(ix + '-' + (ix + 1), ix);
        document.write("<Tr>");
        document.write("<div class='row'>");
        document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
        document.write("</div>");
        document.write("</tr>");
    };
    document.write("</Tbody></Table>");
    document.write("</div>");

    // Nachmittag
    colMdX(3);
    document.write("<Table class='table table-Condensed' id='daten'>");
    document.write(thead);
    document.write("<Tbody>");

    for (ix = 12; ix < 16; ix++) {
        let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
        zeitFaktor.set(ix + '-' + (ix + 1), ix);
        document.write("<Tr>");
        document.write("<div class='row'>");
        document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
        document.write("</div>");
        document.write("</tr>");
    };
    document.write("</Tbody></Table>");
    document.write("</div>");

    // abend
    colMdX(3);
    document.write("<Table class='table table-Condensed' id='daten'>");
    document.write(thead);
    document.write("<Tbody>");

    for (ix = 16; ix < 21; ix++) {
        let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
        zeitFaktor.set(ix + '-' + (ix + 1), ix);
        document.write("<Tr>");
        document.write("<div class='row'>");
        document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
        document.write("</div>");
        document.write("</tr>");
    };
    document.write("</Tbody></Table>");
    document.write("</div>");

    //nacht teil1
    colMdX(3);
    document.write("<Table class='table table-Condensed' id='daten'>");
    document.write(thead);
    document.write("<Tbody>");

    for (ix = 21; ix < 24; ix++) {
        if (ix < 23) {
            let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
            zeitFaktor.set(ix + '-' + (ix + 1), ix);
            document.write("<Tr>");
            document.write("<div class='row'>");
            document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
            document.write("</div>");
            document.write("</tr>");

        }
        else if (ix == 23) {
            let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-0</label></div></div></Td>";
            zeitFaktor.set(ix + '-' + (ix + 1), ix);
            document.write("<Tr>");
            document.write("<div class='row'>");
            document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
            document.write("</div>");
            document.write("</tr>");
        };
    };
    //nacht teil2
    for (ix = 0; ix < 7; ix++) {
        let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
        zeitFaktor.set(ix + '-' + (ix + 1), ix);
        document.write("<Tr>");
        document.write("<div class='row'>");
        document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
        document.write("</div>");
        document.write("</tr>");
    };
    document.write("</Tbody></Table>");
    document.write("</div>");
    document.write("</form>");

    document.write("</div>");// Reihe der tabellen end tag
    document.write("</div>");// Container End Tag
    /*document.write("<div class='row'><div class='col-md-2 col-md-offset-10'><button type='button' class='btn btn-primary btn-lg' onclick='saveFaktoren()'>Speichern</button></div></div>");*/
};


function Patient(vorname, nachname) {           //Konstruktor Funktion für Patientenobjekt

    this.vorname = vorname;
    this.nachname = nachname;
    this.patnum = function(){
        
    } //Für jedes neue Patientenobjekt soll die patnum eins höher als beim Vorgänger sein. Wi Programmier ich das?
    this.addfaktoren = function faktoren() 
                        {
                            let formular = document.forms[1]; //be faktoren formular ist das zweite formular

                            let speichern = new Array(24);
                            for (i = 0; i < 24; i++) speichern[i] = i;
                            //wird von patientenFaktoren() aufgerufen, sobald im Formular ein Feld(i) ohne Eingabe entdeckt wird. Die Funktion geht solange um ein Feld im Formular zurück bis sie ein nicht leeres Feld findet. 
                            //Der Index dieses Feldes(i-n) wird dann an die Mapping Funktion von patientenFaktoren übergeben und als neuer Wert für das ursprünglich leere Feld mit index (i) übergeben.
                            function getNum(num) 
                            {
                                if (num < 0) num = 23;
                                if (formular.elements[num].value !== "") 
                            {
                                return num;
                            }   else 
                            {
                                return getNum(num -= 1);
                            }
                            }

                            var patientenFaktoren = speichern.map(num => {
                            if (formular.elements[num].value != "") 
                            {
                            return formular.elements[num].value;
                            } else 
                            {
                            return formular.elements[getNum(num)].value;
                            }



        });



        const newPatListe = patientenFaktoren;
        //console.log(newPatListe);

        Array.from(zeitFaktor.keys(), (key, ix) =>
            zeitFaktor.set(key, patientenFaktoren[ix])  //hier wird den keys(dieUhrzeiten) die entsprechenden BE Faktoren zugeordnet.
        );

        //console.log(zeitFaktor);

        return(zeitFaktor);

    };
};



function getvorname() {                      //Vornamen auslesen
    let vorname = document.getElementById("vorname").value;
    
   
    return vorname;
    
};

function getsurname(){                      // nachnamen auslesen
let nachname = document.getElementById("surname").value;

return nachname;
};


function creatobj(){            // objekt erzeugen
    let patient = new Patient (getvorname(), getsurname());
    patient.addfaktoren();
    //console.log(patient.addfaktoren());
    return patient;
};

let befaktorenFormatter = function(input) {
    let formattedString = "";
    input.forEach(function(value, key) {
        formattedString += `<br>${key} Uhr: ${value}<br>`; // ES 6 String Schreibweise
    });

    return formattedString;
};

function showsaveobj(){ //Objekt nach dem speichern anzeigen und in der browser-Datenbank speichern
    let patient = creatobj();
    let befaktoren = patient.addfaktoren();                      
    let show = document.getElementById("show");
  
    show.innerHTML = patient.vorname + "<br>" + patient.nachname + "<br>" + "BE-Faktoren: " + befaktorenFormatter(befaktoren);
};   


                        //BE-Faktoren werden im patienten Objekt gespeichert
