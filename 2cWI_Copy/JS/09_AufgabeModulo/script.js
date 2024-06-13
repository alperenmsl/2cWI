// Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren 
// (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 


let summe = 0;
// Diese Variable wird verwendet, um die Summe der geraden Zahlen zu speichern.


for (let zahl = 2; zahl <= 100; zahl += 2) {
    summe += zahl;
    console.log(zahl);
}

// Dies ist eine for-Schleife, die dazu dient, durch die geraden Zahlen von 2 bis 100 zu addieren. 
// Die Schleife beginnt mit zahl = 2, setzt fort, solange zahl kleiner oder gleich 100 ist, 
// und erhöht zahl bei jedem Schleifendurchlauf um 2 (zahl += 2).

console.log("Die Summe aller geraden Zahlen von 2 bis 100 ist:", summe);

// Gibt die Gesamtsumme aller geraden Zahlen von 2 bis 100 in der Konsole aus. Dieser Text wird zusammen mit der berechneten Summe angezeigt.

// summe += zahl;: In jedem Schleifendurchlauf wird die aktuelle Zahl (zahl) zur Summe (summe) hinzugefügt. 
// Das bedeutet, dass die Schleife die Summe der geraden Zahlen von 2 bis 100 berechnet 

