// Baue einen Zufallsgenerator. Es gibt 2 Eingabefelder. Eines gibt den unteren Wert
// Der zu generierenden Zahl an, das andere den oberen Wert.

// Also z.B. 50 und 400. Dann muss eine Zufallszahl zw. 50 und 400 erstellt werden!

function generate() {
    let number1 = document.getElementById("field1").value;
    let number2 = document.getElementById("field2").value;

    let amountOfRandomNumbers = parseInt(number2) - parseInt(number1)
    console.log(number1 + " : " + number2);

    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
}