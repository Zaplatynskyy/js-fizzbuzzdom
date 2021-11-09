// ciclo for che si ripeterà 100 volte
for (let i = 1; i <=100; i++) {
    // conservo il valore i in una variabile num
    const num = i;
    const row = document.querySelector('.row');
    let addClass;

    // condizionale if in caso di multiplo di 3 e 5, assegnando il valore corrispondente
    if ((i % 3 == 0) && (i % 5 == 0)) {
        i = 'FizzBuzz';
        addClass = 'fizzbuzz';

    } else if (i % 3 == 0) {
        i = 'Fizz';
        addClass = 'fizz';

    } else if  (i % 5 == 0){
        i = 'Buzz';
        addClass = 'buzz';

    }

    // stampo il valore in html e in console e riassegno ad i il valore iniziale
    row.innerHTML += `<div class="box ${addClass}">${i}</div>`;
    console.log(i);
    i = num;
}