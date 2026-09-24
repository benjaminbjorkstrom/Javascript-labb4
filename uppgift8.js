/* Lösning till uppgift 8. Benjamin Björkström 2026 */
"use strict";

// Skapar ett objekt som representerar en bok.
const book = {
    title: "Harry potter och fången från Azkaban",
    author: "J.K. Rowling",
    publicationYear: "1999"
}; 

// Funktion som skriver ut information om en bok. 
function printBook(book) {
    console.log("Titel: " + book.title);
    console.log("Författare: " + book.author);
    console.log("Utgivningsår: " + book.publicationYear);
}