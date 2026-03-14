/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter ="A"

// Dichiara la funzione qui.
let namewithletter = (name_list,letter) =>{
    let array=[]
    for  (let i=0; i<name_list.length; i++){
        let actualname=name_list[i]
        if (actualname[0] == letter){
            //console.log(actualname[0])
            array.push(name_list[i])
        } 
    }
    return array
}

// Invoca la funzione qui e stampa il risultato in console

console.log(namewithletter(names,letter))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]