/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

let vowels = (string) =>{
    let num_vowels = 0
    for (let i=0; i<string.length; i++){
        if (string[i].toUpperCase() == "A" || 
            string[i].toUpperCase() == "E" || 
            string[i].toUpperCase() == "I" || 
            string[i].toUpperCase() == "O" ||
            string[i].toUpperCase() == "U"){
                num_vowels++
            }
    }
    return num_vowels
} 


// Invoca la funzione qui e stampa il risultato in console

console.log(vowels(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)