/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa
 che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del 
 rettangolo associato..
*/
console.log("---------- ESERCIZIO 1 ----------");
function area(length, width) {
  //l1-l2*
  return length * width;
}
const length = 10;
const width = 21;
const result = area(length, width);
console.log("A=", result);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come 
 parametri. La funzione deve ritornare la somma dei due parametri, ma se il 
 valore dei due parametri è il medesimo deve invece tornare la loro somma 
 moltiplicata per tre.
*/
console.log("---------- ESERCIZIO 2 ----------");
function crazySum(number1, number2) {
  if (number1 === number2) {
    return (number1 + number2) * 3;
  } else {
    return number1 + number2;
  }
}
const number1 = 10;
const number2 = 21;
const oc = crazySum(number1, number2);
console.log("oc=", oc);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero 
 fornito come parametro e 19. Deve inoltre tornare la differenza assoluta moltiplicata per 
 tre qualora il numero fornito sia maggiore di 19.
*/

console.log("---------- ESERCIZIO 3 ----------");

function crazyDiff(nmb) {
  let crazy = nmb - 19;
  if (nmb > 19) {
    return crazy * 3;
  } else {
    return crazy;
  }
}
let nmb = 21;
let outc = crazyDiff(nmb);
console.log("Result=", outc);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
 ||*/
console.log("---------- ESERCIZIO 4 ----------");

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 200) {
    return true;
  } else {
    return false;
  }
}
let numero1 = 43;
let risultato1 = boundary(numero1);
console.log(risultato1);

let numero2 = 156;
let risultato2 = boundary(numero1);
console.log(risultato1);

let numero3 = 453;
let risultato3 = boundary(numero1);
console.log(risultato1);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
  if (str("EPICODE")) {
  } else {
    return "EPICODE";
  }
}

let stringa = "ciao epicoders";
let outcome = epify(stringa);
console.log(stringa);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro.
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita 
 come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da 
 diverse parole. La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta 
 nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione 
 deve creare una nuova stringa senza il primo e l'ultimo carattere della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna 
 un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
