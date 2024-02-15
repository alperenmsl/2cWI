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

let name = await readlineAsync();
console.log(name);

let age = await readline();
console.log(age);

readline.close();