/* Lösning till uppgift 2. Benjamin Björkström 2026 */
"use strict";

// Skapar variabler för produktens pris och antal.
const price = 100;
const quantity = 3; 

// Beräknar totalpriset.
const total = price * quantity;

// Beräknar priset på produkten inklusive 25% moms.
const totalWithVat = total * 1.25;

// Skriver ut resultaten. 
console.log("pris: " + price + " kr");
console.log("Antal: " + quantity);
console.log("Totalt: " + total + " kr");
console.log("Totalt inklusive moms: " + totalWithVat + " kr");