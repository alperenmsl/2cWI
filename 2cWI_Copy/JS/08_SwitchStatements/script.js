// Erstelle eine Zufallszahl zwischen 5 und 10

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight

// Erstelle eine Zufallszahl zwischen 5 und 10
const zufallszahl = Math.floor(Math.random() * 6) + 5;

// const zufallszahl = Math.floor(Math.random() * 6) + 5;: Hier wird eine Zufallszahl zwischen 5 und 10 erstellt. 
// Math.random() generiert eine Zufallszahl...
// multipliziert mit 6 ergibt einen Bereich von 0 bis 5, und durch Hinzufügen von 5 wird der Bereich auf 5 bis 10 verschoben. 
// Math.floor() rundet die Dezimalzahl ab, um eine ganze Zahl zu erhalten.

// Gib die generierte Zahl aus
console.log("Generierte Zahl: "+zufallszahl);

// Überprüfe die Bedingungen und gib entsprechende Nachrichten aus
if (zufallszahl === 10) {   //Überprüft, ob die Zufallszahl gleich 10 ist.
  console.log("Ten");
} else if (zufallszahl === 9) {   //Überprüft, ob die Zufallszahl gleich 9 ist. 
  console.log("Nine");
} else if (zufallszahl === 8) {
  console.log("Eight");
}