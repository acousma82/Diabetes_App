let naMe = "document.getElementById(name)";
let surName = "document.getElementById(surname)";



let textbefaktoren = "<Td><div class='form-group'><div class='col-md-2'><input type = 'number' value='' class = 'clsFaktor' id = '";
let thead = "<Thead><Tr><div class='row'><Th> Uhrzeit</th><Th class='text-center'>Faktor</th></tr></Thead>";

function colMdX(param) {
    // funktion um abschnitte mit variabler Colum Anzahl zu erstellen
    document.write("<div class='col-md-" + param + "'>");
}

(function createform() {

    document.write("<div class = 'container'>");
    document.write("<form>")

    document.write("<div class='row'>");

    // Vormittag, 7 bis 11 Uhr
    colMdX(3);
    document.write("<Table class='table table-Condensed' id='daten'>");
    document.write(thead);
    document.write("<Tbody>");

    for (ix = 7; ix < 12; ix++) {
        let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
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
            document.write("<Tr>");
            document.write("<div class='row'>");
            document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
            document.write("</div>");
            document.write("</tr>");

        }
        else if (ix == 23) {
            let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-0</label></div></div></Td>";
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
})();


function Patient(surname, lastname, patnum) {

    this.surname = surname;
    this.lastname = lastname;

};

function faktoren() {

        let formular = document.forms[0];
        let uhrZeitenFaktoren = new Map( [

            
        ]
        
        )
        let speichern = new Array(24);
        for (i=0;i<24;i++) speichern[i]=i;

        function getNum(num){    // Funktion wird nur aufgerufen wenn das aktuelle input element leer ist(siehe unten)
            
            if (num < 0) num = 23;

            if (formular.elements[num].value !="") {
               return num;
            } else {
                return getNum(num-=1);
            }
        }

        var patientenFaktoren = speichern.map( num => formular.elements[num].value != "" 
                ? formular.elements[num].value
                : formular.elements[getNum(num)].value
            
        );
            
            const newPatListe = patientenFaktoren;

            console.log(newPatListe);
/*
        for (var ix = 0; ix < 24; ix++) {
            if (formular.elements[ix].value != "") {
                speichern[ix] = formular.elements[ix].value;
            }

            else if (formular.elements[ix - 1].value != "") {
                speichern[ix] = formular.elements[ix - 1].value;
            }

            else if (formular.elements[ix - 2].value != "") {
                speichern[ix] = formular.elements[ix - 2].value;
            }

            else if (formular.elements[ix - 3].value != "") {
                speichern[ix] = formular.elements[ix - 3].value;
            }

            else if (formular.elements[ix - 4].value != "") {
                speichern[ix] = formular.elements[ix - 4].value;
            }

            else if (formular.elements[ix - 5].value != "") {
                speichern[ix] = formular.elements[ix - 5].value;
            }
            else if (formular.elements[ix - 6].value != "") {
                speichern[ix] = formular.elements[ix - 6].value;
            }
            else if (formular.elements[ix - 7].value != "") {
                speichern[ix] = formular.elements[ix - 7].value;
            }
            else if (formular.elements[ix - 8].value != "") {
                speichern[ix] = formular.elements[ix - 8].value;
            }
            else if (formular.elements[ix - 9].value != "") {
                speichern[ix] = formular.elements[ix - 9].value;
            }
            else if (formular.elements[ix - 10].value != "") {
                speichern[ix] = formular.elements[ix - 10].value;
            }
            else if (formular.elements[ix - 10].value != "") {
                speichern[ix] = formular.elements[ix - 10].value;
            }
            else if (formular.elements[ix - 11].value != "") {
                speichern[ix] = formular.elements[ix - 11].value;
            }
            else if (formular.elements[ix - 12].value != "") {
                speichern[ix] = formular.elements[ix - 12].value;
            }
            else if (formular.elements[ix - 13].value != "") {
                speichern[ix] = formular.elements[ix - 13].value;
            } else if (formular.elements[ix - 14].value != "") {
                speichern[ix] = formular.elements[ix - 14].value;
            } else if (formular.elements[ix - 15].value != "") {
                speichern[ix] = formular.elements[ix - 15].value;
            } else if (formular.elements[ix - 16].value != "") {
                speichern[ix] = formular.elements[ix - 16].value;
            }
            else if (formular.elements[ix - 17].value != "") {
                speichern[ix] = formular.elements[ix - 17].value;
            }
            else if (formular.elements[ix - 18].value != "") {
                speichern[ix] = formular.elements[ix - 18].value;
            }
            else if (formular.elements[ix - 19].value != "") {
                speichern[ix] = formular.elements[ix - 19].value;
            }
            else if (formular.elements[ix - 20].value != "") {
                speichern[ix] = formular.elements[ix - 20].value;
            }
            else if (formular.elements[ix - 21].value != "") {
                speichern[ix] = formular.elements[ix - 21].value;
            }
            else if (formular.elements[ix - 22].value != "") {
                speichern[ix] = formular.elements[ix - 22].value;
            }
            else if (formular.elements[ix - 23].value != "") {
                speichern[ix] = formular.elements[ix - 23].value;
            }
            
            else {alert("Bitte das erste Feld ausfüllen")};


        };*/



        //if (valueArray[ix].value == "") {valueArray[ix].value = valueArray[ix-1].value};

    };

function createnew() {
    let p1 = new Patient(naMe, surName);
    return p1;
};

//let p1 = new Patient(naMe, surName);

//p1.addfaktoren();
