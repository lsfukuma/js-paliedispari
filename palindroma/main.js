//palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato


//chiedere una parola all'utente
var parola = prompt('Inserisci una parola' ,'elefante');

var parolaPalindroma = palindroma (parola); //parolaPalindroma  è il risultato di parolareverse

if (parola == parolaPalindroma)  {
    console.log('La parola ' + parola + ' è palindroma')
} else {
    console.log('La parola non è palindroma');
}

//funzione
function palindroma (parola) {
    var ogniCarattere = parola.split('');
    console.log(ogniCarattere);

    var reverso = ogniCarattere.reverse();
    console.log(reverso);

    var parolareverse = reverso.join('');
    console.log(parolareverse);

    return parolareverse;
}
