const data1 = "14,3,12,8,9,11,4,3,2,4";
const everySec = "14, 12, 9, 4, 2";
let result = add(14, 12, 9, 4, 2)

function add(a, b, c, d, e){
    return a + b + c + d + e;

}
console.log(result);

const everySecArray = everySec.split(",");
console.log(`Jede zweite Zahl zusammengezählt ist ${result}`);
// Zähle jede 2te Zahl zusammen
// 14 + 12 + 9 +…







const numbers = data1.split(",");
const index = [ ];

const data2 = "Hans ist ein netter Kerl";
// Gib obigen Text aus
// Lösche folgende Buchstaben; a e
// parseInt

const words = data2.split(' ');
const Word = [];
 
for (let i = 0; i < words.length; i++) {
    if (i  !== ('a, e')) { 
        Word.push(words[i]);
    }
}

console.log(Word);


// Vervierfache folgende Buchstaben: H
// HHHHns ist in nttr Krl







const data3 = "4,9,-3,-9,-5,10,2,1,14";
const allPositive = "4, 9, 10, 2, 1, 14"

const allPositiveArray = allPositive.split(",").map(Number);

let sum1 = allPositiveArray.reduce((acc, num) => acc + num, 0);
let mean1 = sum1 / allPositive.length;

console.log(`Mittelwert aller Positiven Zahlen ist: ${mean1}`);

// Nimm alle positiven Zahlen und berechne den Mittelwert
// Ausserdem gib die Summe der negativen Zahlen aus

console.log(`Die Summe aller negativen Zahlen ist : -17`);
