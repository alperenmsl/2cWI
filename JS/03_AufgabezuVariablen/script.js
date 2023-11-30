 // Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
// Preis von 8 Äpfeln
// Preis von 17 Bananen
// Preis von 1 Tonne Äpfel
// Preis von 1 Tonne Bananen

let a = "Banane"
let b = "Apple"


let bananaPricePerKilo = 2.14
let applePricePerKilo = 3.43

let averageWeightApple = 0.34;
let averageWeightBanana = 0.22;

console.log("Anzahl Bananen/Äpfel "+averageWeightApple/averageWeightBanana);

console.log("Preis von 8 Äpfeln = "+applePricePerKilo*averageWeightApple*8);
console.log("Preis von 17 Bananen = "+bananaPricePerKilo*averageWeightBanana*17);

console.log("Preis von 1 Tonne Äpfel = "+1000*applePricePerKilo);
console.log("Preis von 1 Tonne Banane = "+1000*bananaPricePerKilo);
