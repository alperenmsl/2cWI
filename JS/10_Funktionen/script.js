<<<<<<< HEAD
// Baue folgende Funktionen:

// add(a,b)
// subtract(a,b)
// mulitply(a,b)
// supercalculation(a,b) -> Formel: (a+b)/2 * a
// printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern

let result = add(4,7)
result2 = subtract(4,7)
result3 = mulitply(4,7)
result4 = supercalculation(4,7)

function add(a,b){
    return a + b;

}

function subtract(a,b){
    return a - b;
}

function mulitply(a,b) {
    return a * b;
}

function supercalculation(a,b) {
    return (a+b)/2 * a;
}

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);



function OsterJahr(jahr) {
    let N = jahr - 1900;
    let A = N % 19;
    let B = Math.floor((7 * A + 1) / 19);
    let M = (11 * A + 4 - B) % 29;
    let Q = Math.floor(N / 4);
    let W = (N + Q + 31 - M) % 7;
    let P = 25 - M - W;

    if (P > 0) {
        return `${P}. April`;
    } else {
        return `${P + 31}. März`;
    }
}


let jahr = 2022;
let easterDate = OsterJahr(jahr);
console.log(`Das Datum vom Oster Sonntag im Jahr ${jahr} ist der ${easterDate}`);
=======
// Baue folgende Funktionen:

// add(a,b)
// subtract(a,b)
// mulitply(a,b)
// supercalculation(a,b) -> Formel: (a+b)/2 * a
// printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern

let result = add(4,7)
result2 = subtract(4,7)
result3 = mulitply(4,7)
result4 = supercalculation(4,7)

function add(a,b){
    return a + b;

}

function subtract(a,b){
    return a - b;
}

function mulitply(a,b) {
    return a * b;
}

function supercalculation(a,b) {
    return (a+b)/2 * a;
}

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);



function OsterJahr(jahr) {
    let N = jahr - 1900;
    let A = N % 19;
    let B = Math.floor((7 * A + 1) / 19);
    let M = (11 * A + 4 - B) % 29;
    let Q = Math.floor(N / 4);
    let W = (N + Q + 31 - M) % 7;
    let P = 25 - M - W;

    if (P > 0) {
        return `${P}. April`;
    } else {
        return `${P + 31}. März`;
    }
}


let jahr = 2022;
let easterDate = OsterJahr(jahr);
console.log(`Das Datum vom Oster Sonntag im Jahr ${jahr} ist der ${easterDate}`);
>>>>>>> 0f09642887690c192210d10e92c396829c04da86
