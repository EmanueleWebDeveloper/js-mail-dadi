// **Gioco dei dadi**
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// **Mail**
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// **Consigli del giorno:**
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

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
