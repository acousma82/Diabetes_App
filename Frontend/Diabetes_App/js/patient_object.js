/*
 * Dies ist eine JavaScript-Umgebung.
 *
 * Geben Sie etwas JavaScript ein und führen Sie einen Rechtsklick aus oder wählen Sie aus dem Ausführen-Menü:
 * 1. Ausführen, um den ausgewählten Text zu evaluieren (Cmd-R),
 * 2. Untersuchen, um den Objekt-Inspektor auf das Resultat anzuwenden (Cmd-I), oder
 * 3. Anzeigen, um das Ergebnis in einem Kommentar hinter der Auswahl einzufügen. (Cmd-L)
 */

let naMe = "document.getElementById(name)";
let surName = "document.getElementById(surname)";
let befaktoren = "document.getElementById()";


function Patient(surname, lastname) {

    this.surname = surname;
    this.lastname = lastname;
    //this.patnum = function (){
                //    if (surname){ }
    //}
    this.addfaktoren = function (...uhr1) {
        return uhr1;
    };

};


function createnew(){
let p1 = new Patient(naMe, surName);
//p1.patnum();
return p1;

};

let newPatient = createnew();



patfak = newPatient.addfaktoren([3, 5, 6],[7, 8, 9],[10, 11, 12],[13, 14, 16],[3, 5, 6]);

console.log(patfak);


