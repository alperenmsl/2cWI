// Diese Aufgabe setzt sich aus allen gelernten Inhalten zusammen!
// Erstelle ein Programm, das einen Bankomaten simuliert. Folgende Möglichkeiten gibt es:
// 1. Einzahlen
// 2. Abheben
// 3. Kontostand
// 4. Beenden
// Folgendes Video zeigt dir die Funktionsweise

import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

let balance = 0;

const einzhahlung = (amount) => {
    balance += amount;
    console.log(`Einzahlung von ${amount}€ erfolgreich`);
};

const abhebung = (amount) => {
    if (balance >= amount) {
        balance -= amount;
        console.log(`Abhebung von ${amount}€ erfolgreich`);
    } else {
        console.log("Sie haben nicht genügend Guthaben auf Ihrem Konto");
    }
};

const kontostand = () => {
    console.log(`Sie haben aktuell ${balance}€ auf Ihrem Konto`);
}

const beenden = () => {
    console.log(`Vielen Dank für Ihren Besuch! Haben Sie einen schönen Tag noch`);
    readline.close
}

const readlineAsync = () => {
    return new Promise((resolve) => {
        rl.question("", (userRes) => {
            resolve(userRes);
        });
    });
};

const showMenu = async () => {
    console.log(`
        Bankomat Simulator
        1. Einzahlen
        2. Abheben
        3. Kontostand
        4. Beenden
    `);
};



printMenu();
