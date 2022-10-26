// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

const number1 = Number(prompt("inserisci il primo numero"));
const number2 = Number(prompt("inserisci il secondo numero"));
const number3 = Number(prompt("inserisci il terzo numero"));
const number4 = Number(prompt("inserisci il quarto numero"));
const number5 = Number(prompt("inserisci il quinto numero"));
const number6 = Number(prompt("inserisci il sesto numero"));
const number7 = Number(prompt("inserisci il settimo numero"));
const number8 = Number(prompt("inserisci il ottavo numero"));
const number9 = Number(prompt("inserisci il nono numero"));
const number10 = Number(prompt("inserisci il decimo numero"));


const listNumbers = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10];

let sum;

for ( i=0; i<11; i++) {
    sum = number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9 + number10;
}

console.log(sum);