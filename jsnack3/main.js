// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// const listNumbers = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10];
// console.log(listNumbers);

let sum = 0;

for ( i=0; i<3; i++) {
    const number = Number(prompt("inserisci un numero"));
    sum += number;
}

console.log(sum);