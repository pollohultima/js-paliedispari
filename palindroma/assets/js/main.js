/*
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

//Chiedo all'utente una parola e la suddivido in sottostringhe
let userWord = prompt('Inserisci una parola, verificherò se è palindroma');

function turn() {
    return inverted = userWord.split("").reverse().join("");
}

console.log(turn(userWord));

if (userWord == turn(userWord)) {
    document.querySelector('.palindroma').innerHTML = 'La parola è palindroma'
} else {
    document.querySelector('.palindroma').innerHTML = 'La parola non è palindroma'
}
