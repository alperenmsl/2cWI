const data1 = "14,3,12,8,9,11,4,3,2,4";
// Zähle jede 2te Zahl zusammen
// 14 + 12 + 9 +…

const data2 = "Hans ist ein netter Kerl H";
// Gib obigen Text aus
// Lösche folgende Buchstaben; a e
// Vervierfache folgende Buchstaben: H
// HHHHns ist in nttr Krl HHHH

const data3 = "4,9,-3,-9,-5,10,2,1,14";
// NImm alle positiven Zahlen und berechne den Mittelwert
// Ausserdem gib die Summe der negativen Zahlen aus
//  




const data4 = "14,3,12,8,4";
// Zähle jede 2te Zahl zusammen
// 14 + 12 + 9 +...
let arr = data4.split(",");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  let num = parseInt(arr[i]);
  if (i % 2 == 0) {
    sum = sum + num;
  }
}
console.log(sum);
const data5 = "fds ajk dfjask ss";
// // Gib obigen Text aus
// // Lösche folgende Buchstaben; a e
// // Vervierfache folgende Buchstaben: H
let arr1 = data5.split("");
let output = "";
for (let i = 0; i < arr1.length; i++) {
  let letter = arr1[i];
  console.log(letter);
  if (letter == "a" || letter == "e") {
  } else if (letter == "H") {
    output += "HHHH ";
  } else {
    output += letter + " ";
  }
}
console.log(output);
// HHHHns ist in nttr Krl HHHH
const data6 = "4,9,-3,-9,-5,10,2,1,14";
// // NImm alle positiven Zahlen und berechne den Mittelwert
// // Ausserdem gib die Summe der negativen Zahlen aus
// //
let arr2 = data6.split(",");
let sum1 = 0;
let amount = 0;
for (let i = 0; i < arr2.length; i++) {
  let number = parseInt(arr2[i]);
  console.log(number);
  if (number > 0) {
    sum1 += number;
    amount++;
  }
}
let average = sum1 / amount;
console.log(average);