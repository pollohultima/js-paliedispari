/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

//Chiedo all'utente di selezionare pari o dispari
const choice = prompt('Scegli pari o dispari');
console.log(choice);

//Chiedo all'utente di inserire un numero da 1 a 5
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(userNumber);

//Genero numero random fra 1 e 5 per il pc
function pcNumber() {
    return randomPC = Math.ceil(Math.random() * 5);
}
console.log(pcNumber());

const somma = randomPC + userNumber;
console.log(somma);

function result(risultato) {
    if (risultato % 2 == 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

if (choice == result(somma)) {
    document.querySelector('.winner').innerHTML = 'Hai vinto complimenti!'

} else {
    document.querySelector('.winner').innerHTML = 'Hai perso :('

}