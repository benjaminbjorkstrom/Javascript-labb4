/* Lösning till uppgift 7. Benjamin Björkström 2026 */
"use strict";

// Skapar en array med sex tal.
const numbers = [5, 8, 3, 10, 7, 9];

// Funktion som räknar ut summan av alla tal i arrayen.
function calculateSum(numbers) {
    let sum = 0;

    // Går igenom alla tal i arrayen.
    for (let number of numbers) {
        sum += number;
    }

    // Returnerar summan.
    return sum;
}

//Anropar funktionen och skriver ut resultatet.
console.log("Summan är " + calculateSum(numbers));
