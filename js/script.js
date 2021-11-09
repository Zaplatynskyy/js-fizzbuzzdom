// Consegna: Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1 Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2 Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3 Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// ciclo for che si ripeterà 100 volte
for (let i = 1; i <=100; i++) {
    // conservo il valore i in una variabile num
    const num = i;

    // condizionale if in caso di multiplo di 3 e 5, assegnando il valore corrispondente
    if ((i % 3 == 0) && (i % 5 == 0)) {
        i = 'FizzBuzz';
    } else if (i % 3 == 0) {
        i = 'Fizz';
    } else if  (i % 5 == 0){
        i = 'Buzz';
    }

    // stampo il valore in console e riassegno ad i il valore iniziale
    console.log(i);
    i = num;
}