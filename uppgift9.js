/* Lösning till uppgift 9. Benjamin Björkström 2026 */
"use strict";

// Skapar en array med personer
const people = [
    {
        name: "Martin"
        age: 25,
        city: "Stockholm"
    },
    {
        name: "Elin"
        age: 15,
        city: "Göteborg"
    },
    {
        name: "Alexander"
        age: 40,
        city: "Umeå"
    }
];

// Funktion som skriver ut information om en person.
function printPerson(person) {
    if (person.age >= 18) {
        console.log(
            person.name + " bor i " + person.city + " och är myndig."
        );
    } else {
        console.log(
            person.name + "bor i" + person.city + " och är inte myndig."
        ):
    }
}

// Går igenom alla personer i arrayen.
for (let person of people) {
    printPerson(person);
}
