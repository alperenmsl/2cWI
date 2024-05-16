// Variablen
let a = 7;
let b = 8;
let c = 10;
// Berechne folgendes und gib das Eregebnis über console.log aus
// a + b + c
// (a + b) / c
// c -a + b
// a + b + c * 3
// (a + b + c)/4

console.log(a + b + c);
console.log((a + b) / c);
console.log(c - a + b);
console.log(a + b + c * 3);
console.log(a + b + c /4);


// Lege eine Variable firstname und eine Varialbe lastname an. Weise den Variablen Deinen Namen zu. Gib folgendes aus:

// "Ich heiße VORNAME NACHNAME"

let name = "Alperen"
let fullname = "Meseli"

console.log(`Ich heiße ${name} ${fullname}`);

// Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"

let banana = "Banana"
let apple = "Apple"

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

let bananaPricePerKilo = 2.14
let applePricePerKilo = 3.43

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

let averageWeightApple = 0.34;
let averageWeightBanana = 0.22;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel



// Preis von 8 Äpfeln
console.log(`Der Preis von 8 Äpfeln wäre ${(applePricePerKilo * averageWeightApple)*8}`);

// Preis von 17 Bananen
console.log(`Der Preis von 17 Bananen wäre ${(bananaPricePerKilo * averageWeightBanana)*17}`);

// Preis von 1 Tonne Äpfel
console.log(`Der Preis von einer Tonne Äpfel wäre ${(applePricePerKilo * averageWeightApple) * 1000}`);

// Preis von 1 Tonne Bananen
console.log(`Der Preis von einer Tonne Banane wäre ${(bananaPricePerKilo * averageWeightBanana) * 1000}`);

// Zähle von 7 bis 45
for (let i = 7; i <= 45; i++) {
    console.log(i);
}

console.log(" ");

// Zähle von 9 bis 99
for (let i = 9; i <= 99; i++){
    console.log(i);
}

console.log(" ");

// Zähle rückwärts von 10 bis 0
for (let i = 10; i >= 0; i--){
    console.log(i);
}

console.log(" ");

// Zähle rückwärts von 1234 bis 1207
for (let i = 1234; i >= 1207; i--){
    console.log(i);
}

console.log(" ");

// Gib Deinen Namen genau 8 mal aus
for (let i = 0; i < 8; i++) {
    console.log("Alperen");
}

console.log(" ");

// Zähle von 0 auf 10, dann gib Deinen Namen aus, dann zähle von 10 auf 0
for (let i = 0; i <= 10; i++){
    console.log(i);

} 

console.log("Alperen");

for (let i = 10; i >= 0; i--){
    console.log(i);
}

console.log(" ");
console.log(" ");

// erstelle eine Variable number
let number = 8

// Aufgabe 1
// Wenn die Zahl kleiner ist als 20  gib aus "Mini"

if (number < 20){
    console.log("Mini");
}
// Wenn die Zahl zw. 20 und 50 ist gib aus "Medium"

if (number <=20 && number >= 50 ){
    console.log("Medium");
}
// Wenn die Zahl größer als 50 ist gib aus "Large"

if (number > 50){
    console.log("Large");
}