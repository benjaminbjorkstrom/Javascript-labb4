/* Lösning till uppgift 3. Benjamin Björkström 2026 */
"use strict"

// Anger personens ålder.
const age = 20;

// Kontrollerar vilken åldergrupp personen tillhör.
if (age < 18) {
    console.log("Barn");
} else if (age < 65) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}