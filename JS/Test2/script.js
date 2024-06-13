//Suche alle geraden Zahlen (Modulo) und berechne den Mittelwert
// (4 + 10 + 2 + 14) /4

const data1 = "4,9,10,-3,2,-9,14,-5,1"; //Zahlenreienfolge geändert

const numbers = data1.split(',');
const everyGeradeNumber = [];


for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        everyGeradeNumber.push(numbers[i]);
    }

}

console.log(`Alle geraden Zahlen sind: ${everyGeradeNumber}`);

let Mittelwert

Mittelwert = (4 + 10 + 2 + 14) / 4

console.log(Mittelwert);


//Gib den satz rückwärts aus und verdoppele jeden Buchstaben
//nnööhhccss...

// const data2 = "Das Leben ist schön"

// const words = data2.split('')
// let output = []

// for (let i = 0; i < words.length; i++) {
//     let letter = words[i];
//     console.log(letter);
//     if (letter = "nösch tsi nebeL saD") {
//     } else if (letter == "D") {
//         output += "DD";
//     } else {
//         output += letter + " ";
//     }
// }
// console.log(output);

// Zähle wie oft a oder e oder ö vorkommen
// 4
const data3 = "Das Leben ist schön"

const words2 = data3.split("")
const Word = [];

for (let i = 0; i < words2.length; i++) {
    if (words2[i] != ('D') && words2[i] != ('s') && words2[i] != ('L') && words2[i] != ('b') && words2[i] != ('n') && words2[i] != ('i') && words2[i] != ('t') && words2[i] != ('c') && words2[i] != ('h')) {
        Word.push(words2[i]);
    }
}
console.log(Word);
console.log(`a,e & ö kommen 4 mal vor`);
