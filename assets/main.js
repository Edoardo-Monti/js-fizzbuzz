/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

*/

let box = document.querySelector(`#griglia`)
//stampo i numeri da 1 a 100 in console
for(let n=1; n<=100; n++){
   
    //console.log(n)
    let item = document.createElement(`div`)
   
    if(n % 3 == 0 && n % 5 == 0){
        console.log("FizzBuzz")
        item.innerHTML += `FizzBuzz`
        item.className = `col p-3 g-2 box-color`
        box.append(item)
    } else if(n % 3 == 0){
        console.log("Fizz")
        item.innerHTML += `Fizz`
        item.className = `col p-3 g-2 box-color2`
        box.append(item)
    }else if(n % 5 == 0){
        console.log("Buzz")
        item.innerHTML += `Buzz`
        item.className = `col p-3 g-2 box-color3`
        box.append(item)
    }else{
         console.log(n)
         item.innerHTML += `${n}`
        item.className = `col p-3 g-2 box-color4`
        box.append(item)
    }
    
}
