/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in JS sono:
-Stringhe: contengono caratteri virgolettati e possono essere utilizzati anche per comporre frasi. es: "alessandro" è una stringa.
-Number: contengono numeri,interi o decimali, e possono essere usati per fare operazioni matematiche. 
Sono semplicemente numeri senza le virgolette altrimenti diventerebbero stringhe poichè un numero tra virgolette assume il valore di parola (carattere). es: 5 è corretto ma "5" è sbagliato.
-Boolean: contengono solamente due valori,true(vero) o false(falso), e possono essere usati per fare confronti tra due variabili. es: 10<20 è true(vero) ma 10>20 è false(falso).
-Null: è un dato che viene assegnato dal programmatore e indica che la variabile non ha nessun valore assegnato. es: let x = null;
-Undefined: è un valore simile a Null ma questa volta viene assegnato direttamente dal programma ma comunque indica che una variabile non ha ancora nessun valore assegnato. 

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Alessandro";

console.log(myName);

/* let myName = "Alessandro";
console.log(myName);*/
/* usando let al posto di const il risultato cambia poiche il valore della variabile let può essere modificato. collegato ad Esercizio 5*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const firstNumber = 12;
const secondNumber = 20;
addiction = firstNumber + secondNumber;

console.log("la somma tra 12 e 20 è:" + addiction);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;

console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*myName = "Di Giovanni";
console.log(myName);*/
/* D1.js:59 Uncaught TypeError: Assignment to constant variable.
    at D1.js:59:8 */
/*non è stato possibile riassegnare un valore diverso da quello inziale alla variabile const myName*/
/* si può modificare se al posto di const ci fosse stato let. Vedi secondo esempio con la variabile let dell'esercizio 2*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

subtraction = 4 - x;
console.log("la sottrazione tra 4 e 12 è:" + subtraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John";
verify = name1 !== name2;
console.log(verify);
console.log(name1.toLowerCase());
console.log(name2.toLowerCase());
console.log(name1.toLowerCase() === name2.toLowerCase());
