
var zeitFaktor = new Map();

let textbefaktoren = "<Td><div class='form-group'><div class='col-md-2'><input type = 'number' value='' class = 'clsFaktor' id = '";
let thead = "<Thead><Tr><div class='row'><Th> Uhrzeit</th><Th class='text-center'>Faktor</th></tr></Thead>";

function colMdX(param) {
    // funktion um abschnitte mit variabler Colum Anzahl zu erstellen
    document.write("<div class='col-md-" + param + "'>");
}

//(function createindex(){})();
 
(function createform() {
/*let index = document.getElementById("index");

if (index.parentNode) {
  index.parentNode.removeChild(index);
};*/

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
    document.write("<div class='row'><div class='col-md-2 col-md-offset-10'><button type='button' class='btn btn-primary btn-lg' onclick='saveFaktoren()'>Speichern</button></div></div>");
})();


function Patient(surname, lastname, patnum) {           //Konstruktor Funktion für Patientenobjekt

    this.surname = surname;
    this.lastname = lastname;
    this.patnum = patnum;
    this.addfaktoren = function faktoren() 
                        {
                            let formular = document.forms[1]; //be faktoren formular ist das zweite formular

                            let speichern = new Array(24);
                            for (i = 0; i < 24; i++) speichern[i] = i;

                            function getNum(num) 
                            {
                                if (num < 0) num = 23;
                                if (formular.elements[num].value != "") 
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
        console.log(newPatListe);

        Array.from(zeitFaktor.keys(), (key, ix) =>
            zeitFaktor.set(key, patientenFaktoren[ix])  //hier wird den keys(dieUhrzeiten) die entsprechenden BE Faktoren zugeordnet.
        );

        console.log(zeitFaktor);
        return(zeitFaktor);

    };
};



function createnew() {                      //neues Patienten Objekt wird erstellt
    var vorname = document.getElementById("vorname").value;
    var nachname = document.getElementById("surname").value;
   
   var diabetes = new Patient (vorname, nachname);
    
    

  
    return diabetes;
    
};


function saveFaktoren(){
diabetes.valueOf();

};
                        //BE-Faktoren werden im patienten Objekt gespeichert
