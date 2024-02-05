let numbers = [4,1,2,3,17,199]

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);       So hätte ich es gemacht bevor ich mir das Youtube Video angeschaut habe 
// console.log(numbers[4]);
// console.log(numbers[5]);

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    
}

let result = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] 
console.log(`Alle Werte zusammen ergeben den Wert ${result}`);