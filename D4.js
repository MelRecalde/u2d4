/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("----- RECTANGLE AREA -----")
function area(l1, l2) {
    return l1 * l2
}

let result = area(3, 7)
console.log("Rectangle area : ", result)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("----- CRAZYSUM -----")
function crazySum(num1, num2) {
    let result = num1 + num2
    // console.log(result)
    if (num1 === num2) {
        return result
    } else {
        return result * 3
    }
}

console.log("1.The result is : ", crazySum(3, 3))
// *Esempio con due valori differenti 
console.log("2.The result is : ", crazySum(1, 2))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("----- CRAZYDIFF -----")
function crazyDiff(a) {
    const b = 19
    const diff = Math.abs(a - b)
    // console.log(diff)
    if (a > 19) {
        return diff * 3
    } else {
        return diff
    }
}

console.log("2.The result is : ", crazyDiff(23))
//* Esempio con il numero fornito minore
console.log("1.The result is : ", crazyDiff(11))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("----- BOUNDARY -----")

function boundary(n){
    if(n >= 20 && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}
console.log("This number is a number from 20 and 100 or equal to 400 : ", boundary(30))
// * Esempio con numero non compreso e non uguale
console.log("This number is a number from 20 and 100 or equal to 400 : ", boundary(300))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("----- BOUNDARY -----")
function epify(string){
    if(string.startsWith("EPICODE")) {
        return string
    } else {
        return (string + " Epicode")
    }
}

console.log(epify("EPICODE ALL THE WAY!"))
console.log(epify("Hello World this is"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("----- CHECK 3 AND 7-----")
function check3and7(number){
    if(number % 3 == 0 || number % 7 == 0){
        return true
    } else {
        return false
    }
}
console.log(check3and7(21))
console.log(check3and7(10))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("-----REVERSE-----")

function reverseString(stringa){
    return stringa.split("").reverse().join("");
}

console.log(reverseString("HELLO!"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("----- UPPER FIRST-----")
/*
function upperFirst(string){
    let splitted = string.split(" ");
    console.log(splitted)
    for (let index = 0; index < splitted.length; index++) {
        const elemento = splitted[index]
    }
    return splitted.slice().toUpperCase()
}
console.log(upperFirst("embrace the journey."))
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("----- CUT STRING -----")

function cutString(string){
 //   let splitted = string.split(" ")
    return string.slice(7)
}
console.log(cutString("embrace the journey."))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("----- RANDOM NUMBER -----")

function giveMeRandom(n){
    const randomNumbers = []
return randomNumbers.push(n)
}
console.log(" This is a random number from 0 to 10 : " , giveMeRandom(Math.floor(Math.random()* 11)))