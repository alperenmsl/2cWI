const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let balance = 0;

const einzahlung = (amount) => {
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
};

const beenden = () => {
    console.log(`Vielen Dank für Ihren Besuch! Haben Sie einen schönen Tag noch`);
    rl.close();
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

const main = async () => {
    let option = 0;
    while (option !== 4) {
        await showMenu();
        option = parseInt(await readlineAsync());
        switch (option) {
            case 1:
                console.log("Geben Sie den Einzahlungsbetrag ein:");
                einzahlung(parseInt(await readlineAsync()));
                break;
            case 2:
                console.log("Geben Sie den Abhebungsbetrag ein:");
                abhebung(parseInt(await readlineAsync()));
                break;
            case 3:
                kontostand();
                break;
            case 4:
                beenden();
                break;
            default:
                console.log("Ungültige Option");
                break;
        }
    }
};

main();

function readlineAsync() {
    return new Promise((resolve) => {
        rl.question("", (userRes) => {
            resolve(userRes);
        });
    });
}