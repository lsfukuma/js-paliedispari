//gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

// chiedere all'utente un numero tra 1 e 5
var numberUser = parseInt(prompt('Inserisci un numero tra 1 e 5' , '4'));
console.log('Numero scelto dall\'utente: ' + numberUser);

//generare un numero random tra 1 e 5
var numberPc = Math.floor(Math.random()* 5)+ 1;
console.log('Numero random: ' + numberPc);

//chiedere all'utente se sceglie pari o dispari
var evenOdd = prompt('Pari o dispari?');
console.log('Dispari o pari? ' + evenOdd);

//sapere cosa l'utente ha messo: pari o dispari
var userEven = evenOdd == 'pari';
console.log(userEven);
var userOdd = evenOdd == 'dispari'

//fare la somma  dei due numeri
var somma = numberUser + numberPc
console.log(somma);

//somma
if ((somma % 2 == 0) && (userEven == true)) {
    console.log('Hai vinto!');
}
else if ((somma % 2 == 1) && (userOdd== true)){
    console.log('Hai vinto');
}
else {
    console.log('Hai perso');
}
