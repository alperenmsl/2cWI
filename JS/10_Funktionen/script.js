// Baue folgende Funktionen:

// add(a,b)
// subtract(a,b)
// mulitply(a,b)
// supercalculation(a,b) -> Formel: (a+b)/2 * a
// printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern.




function printMenu(name, age, place) {
    console.log("Wilkommen" +" "+ name + "! Your are" + " " + age + " years old and come from" + " " + place);
}

// Diese Funktion nimmt drei Parameter entgegen: name, age und place. 
// Sie gibt eine personalisierte Begrüßung und Informationen über den Benutzer auf der Konsole aus. 
// Zum Beispiel, wenn du printMenu("Peter", 17, "Lustenau") aufrufst, wird die Ausgabe "Wilkommen Peter! You are 17 years old and come from Lustenau" sein.

function add(a,b){
    return a + b  / 2 * a;
}
// Diese Funktion nimmt zwei Parameter a und b entgegen und führt eine Berechnung durch. 
// Es addiert a und b, teilt das Ergebnis durch 2 und multipliziert das Ergebnis mit a. Das Ergebnis wird zurückgegeben.

printMenu("Peter", 17, "Lustenau");
printMenu("Hans", 54, "Dornbirn");

// Der Code enthält Aufrufe der Funktion printMenu für die Benutzer "Peter" und "Hans"
let result = add(4,7)
console.log(result);


function printEasterDate(year,date) {
    console.log("Easter in the year" + " " + year + "will take place on the " + " " + date);
}

printEasterDate(2024,"31.March")