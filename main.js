// **Gioco dei dadi**
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


                 // ESERCIZIO 1 - GIOCO DEI DADI

const risultatoHtml = document.getElementById("risultato");
const bottoneHtml = document.getElementById("button");
const bottone2Html = document.getElementById("button2");

let risultatoPlayer1;
let risultatoPlayer2;

bottoneHtml.addEventListener("click", function() {
    risultatoPlayer1 = Math.floor(Math.random() * 7);
    console.log(risultatoPlayer1);
});

bottone2Html.addEventListener("click", function() {
    risultatoPlayer2 = Math.floor(Math.random() * 7);
    console.log(risultatoPlayer2);

    determinaVincitore();
});

function determinaVincitore() {
    if (risultatoPlayer1 > risultatoPlayer2) {
        risultatoHtml.textContent = 'Il vincitore è il Player 1 perché il numero è più alto.';
    } else if (risultatoPlayer1 < risultatoPlayer2) {
        risultatoHtml.textContent = 'Il vincitore è il Player 2 perché il numero è più alto.';
    } else {
        risultatoHtml.textContent = 'È un pareggio!';
    }
}


                        // **Mail**
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

                  // ESERCIZIO 2 - Mail


const email = [ "email1", "email2", "email3", "email4", "email5" ]

let posta = prompt( "inserisci la tua email")

if ( posta === "email1" ){
    document.writeln( "la tua mail è la email1")
} else if (posta === "email2" ){
    document.writeln( "la tua mail è la email1")
}else if (posta === "email3" ){
    document.writeln( "la tua mail è la email1")
}else if (posta === "email4" ){
    document.writeln( "la tua mail è la email1")
}else if (posta === "email5" ){
    document.writeln( "la tua mail è la email1")
}else {
    document.writeln( "la tua mail è errata")
}