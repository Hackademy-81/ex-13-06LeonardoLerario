// Scrivere una funzione che prenda in ingresso un numero e mi stampi in console tutti i numeri dispari da 1 al numero passato

// function ex (number){
//     for (let i = 1; i <= number; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         };
        
//     };
// };

// ex (150)


// Scrivere una funzione che prenda in ingresso un array di numeri e restituisca la media tra tutti i numeri all'interno dell'array

// function ex(arr) {
//     let somma = arr.reduce((acc,number)=>acc + number)
//     let sommaFinale = somma / arr.length
//     console.log(sommaFinale);
//     return sommaFinale;
// };

// ex ([1,2,3,4,5])


// Scrivere una funzione che prenda in ingresso una stringa e restituisca solo la prima parola

// function ex(stringa) {
//     let parola = stringa.split(' ')
//     return parola[0]
// };


// console.log(ex ('ciao a tutti'));



// Scrivere una funzione che prenda in ingresso un array di elementi di qualsiasi tipo di dato e restituisca un nuovo array che contenga soltanto i numeri dell'array passato

// function ex(array) {
//     let numeri = array.filter(element => typeof element == 'number')
//     console.log(numeri);
// };
// ex(['ciao', 1,2,3,4, 'sole', 'luna', 6,7,8])

// Scrivere una funzione che prenda in ingresso due array e restituisca un nuovo array che sia la concatenazione dei due inviati ma capovolto

// function ex(arr1, arr2) {
//     let newArray = arr1.concat(arr2).reverse()
//     return newArray
// }

// console.log(ex (['ciao'], ['sono']));

// Scrivere una funzione che prenda in ingresso un numero N e restituisca un nuovo array riempito con N numeri casuali tra 1 e 10

// function ex(number) {
//     let numeriRandom = [];

//     for (let i = 0; i < number; i++) {
//         let numeriDaPushare = Math.floor(Math.random()* 10) + 1;
//         numeriRandom.push(numeriDaPushare)
//     }

//     return numeriRandom;
// }

// console.log(ex(10));


// Scrivere una funzione che prenda in ingresso un array di oggetti. Ciascun oggetto deve rappresentare un vostro buddy e deve avere come proprieta' il nome ed il cognome. La funzione dovra' restituire un nuovo array di stringhe con i nomi dei buddy
// Es.   input=[{nome: 'Matteo', cognome:'Sisto'} , {nome:'Angelo', cognome:'Cardone'}]       output=['Matteo', 'Angelo']

// let gruppo = [
//     {name: 'Leonardo', cognome : 'Lerario'},
//     {name: 'Pasquale', cognome : 'Casalino'},
//     {name: 'Stefano', cognome : 'Alfieri'},
// ];

// function buddiName(buddies) {
//     let arrayName = []
//      buddies.forEach(buddy => {
//         arrayName.push(buddy.name)
//      });

//      return arrayName;

// };

// console.log(buddiName(gruppo));



// Lavoriamo con il DOM. Realizzare un h1, un campo di input ed un bottone. Al click sul bottone il testo dell'h1 si dovra' aggiornare con il testo scritto dall'utente nel campo di input

// let h1 = document.querySelector('#h1')
// let button = document.querySelector('#button')
// let input = document.querySelector('#inputh1')


// button.addEventListener('click',()=> {
//     h1.innerHTML = input.value
// });


// Realizzare due campi di input (uno text e l'altro number) ed un bottone. Al click sul bottone dovra' crearsi una card contenente i dati scritti dall'utente nei campi di input. Se l'utente non riempie entrambi i campi dovra' apparire un alert per segnalare l'errore

let inputText = document.querySelector('#inputText');
let inputNumber = document.querySelector('#inputNumber');
let button = document.querySelector('#button');
let wrapper = document.querySelector('.wrapper');


button.addEventListener('click', ()=>{

   let div = document.createElement('div')
    div.classList.add('col-12');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${inputText.value}</h5>
                      <p class="card-text">${inputNumber.value}</p>
                    </div>
                </div>
    `;
    if (inputText.value != '' && inputNumber.value != '') {
        wrapper.appendChild(div);
    }else{
        alert ('inserire i campi qui sotto')
    };


});












