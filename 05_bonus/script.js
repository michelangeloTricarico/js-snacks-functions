/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const sayHello = (name_input) =>{
    let data = new Date();
    if (data.getHours()>0 && data.getHours()<=13){
        return ("Buongiorno "+name_input)
    }
    else if (data.getHours()>13 && data.getHours()<=17){
        return ("Buon pomeriggio "+name_input)
    }
    else if (data.getHours()>17 && data.getHours()<=24){
        return ("Buonasera "+name_input)
    }
}


// Invoca la funzione qui e stampa il risultato in console

console.log(sayHello(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.