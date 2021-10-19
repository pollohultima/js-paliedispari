/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

//Chiedo all'utente di selezionare pari o dispari
let choice = prompt('Scegli pari o dispari');

//Chiedo all'utente di inserire un numero da 1 a 5
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(userNumber);

//Genero numero random fra 1 e 5 per il pc
function pcNumber() {
    return randomNum = Math.floor(Math.random() * 5) + 1;
}
console.log(pcNumber());

function sommaNum() {
    return somma = pcNumber() + userNumber;
}
console.log(sommaNum());