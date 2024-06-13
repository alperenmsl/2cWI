const data = "Hans geht heute schwimmen! das ist gut";
//Gib jedes 3te Wort aus
// Output = Hans schwimmen! gut

const words = data.split(' ');
const everyThirdWord = [];
 
for (let i = 0; i < words.length; i++) {
    if (i % 3 === 0) {
        everyThirdWord.push(words[i]);
    }
}

console.log(everyThirdWord);


const numbers = "8,2,1,4,6,1,8,7";
//Zähle alle Zahlen die zwischen 4 (Inkl. und 8 exkl.)liegen
//Output = 3

const numbers2 = numbers.split(",");
const count = numbers2.filter(num => num >= 4 && num < 8).length;

console.log(count);

const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,-14";
const temperaturesWeek2 = "-1,5,3,-10,-11,2,30,-8,-44";

const temperaturesWeek1Array = temperaturesWeek1.split(",").map(Number);
const temperaturesWeek2Array = temperaturesWeek2.split(",").map(Number);

// Berechne den Mittelwert der Woche 1
let sumWeek1 = temperaturesWeek1Array.reduce((acc, num) => acc + num, 0);
let meanWeek1 = sumWeek1 / temperaturesWeek1Array.length;

// Berechne den Mittelwert der Woche 2
let sumWeek2 = temperaturesWeek2Array.reduce((acc, num) => acc + num, 0);
let meanWeek2 = sumWeek2 / temperaturesWeek2Array.length;

// Gib die Ergebnisse aus
console.log(`Mittelwert der Woche 1: ${meanWeek1}`);
console.log(`Mittelwert der Woche 2: ${meanWeek2}`);

