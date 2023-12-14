// Erstelle eine Zufallszahl zwischen 5 und 10

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight

// Erstelle eine Zufallszahl zwischen 5 und 10
const zufallszahl = Math.floor(Math.random() * 6) + 5;

// Gib die generierte Zahl aus
console.log("Generierte Zahl: "+zufallszahl);

// Überprüfe die Bedingungen und gib entsprechende Nachrichten aus
if (zufallszahl === 10) {
  console.log("Ten");
} else if (zufallszahl === 9) {
  console.log("Nine");
} else if (zufallszahl === 8) {
  console.log("Eight");
}