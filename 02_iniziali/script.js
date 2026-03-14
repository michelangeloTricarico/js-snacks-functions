/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const letters = (names_par) => {
    let array=[]
    for  (let i=0; i<names.length; i++){
        let actualname=names[i]
        array.push(actualname[0])
    }
    return array
}

// Invoca la funzione qui e stampa il risultato in console
console.log(letters(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]