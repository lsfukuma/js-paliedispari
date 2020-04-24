//palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato


//chiedere una parola all'utente
var parola = prompt('Inserisci una parola');

var ogniCarattere = parola.split('');
console.log(ogniCarattere);

var reverso = ogniCarattere.reverse();
console.log(reverso);

var stringa2 = reverso.join('');
console.log(stringa2);

var stringa1 = ogniCarattere.join('');
console.log(stringa1);


if (stringa1 = stringa2)  {
    console.log('La parola ' + parola + ' è palindroma')
}



//funzione
//function palindroma (parola) {
    //1. operacoes: primeiro passo - transformar a stringa em um array com os caracteres separados --> split?
    // var ogniCarattere = parola.split('');
    // console.log(ogniCarattere);
    //2. alguma funcao que faca ler da direita para esquerda -- achar isso --> reverse!

    //3. SE sao iguais: palavra palindroma, se nao, xauu
