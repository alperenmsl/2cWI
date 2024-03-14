
import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const readlineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes)
        });
    });
};

let balance = 0;


while(true){
    console.log("Bitte selektieren sie");
    let selection = await readlineAsync();
    console.log("Du hast gewählt " + selection);
}

const einzahlung = (amount) => {
    balance+= amount
    console.log(`Sie haben erfolgreich einen betrag von ${amount}€ eingezahlt`);
};

const abhebung = (amount) => {
    if (balance>= amount){
        balance-= amount
        console.log(`Sie haben erfolgreich einen betrag von ${amount}€ abgehoben`);
    } else if(balance <= amount){
        console.log(`Sie haben nicht genügend Guthaben auf dem Konto`);
    }
};

const kontostand = (amount) => {
    console.log(`Sie haben aktuell ${balance}€ auf ihrem Konto`);
};

const beenden = () =>{
    return 0
};





readline.close();