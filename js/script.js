// ciclo for che si ripeterà 100 volte
for (let i = 1; i <= 100; i++) {
    // conservo il valore i in una variabile num
    const num = i;
    const row = document.querySelector('.row');
    let addClass;
    let li = document.createElement("li");
    li.className = 'box';

    // condizionale if in caso di multiplo di 3 e 5, assegnando il valore corrispondente
    if ((i % 3 == 0) && (i % 5 == 0)) {
        i = 'FizzBuzz';
        li.classList.add('fizzbuzz');

    } else if (i % 3 == 0) {
        i = 'Fizz';
        li.classList.add('fizz');

    } else if (i % 5 == 0) {
        i = 'Buzz';
        li.classList.add('buzz');

    }

    // stampo il valore in html e in console e riassegno ad i il valore iniziale
    // row.innerHTML += `<div class="box ${addClass}">${i}</div>`;

    // stampo in html con il metodo .append
    li.innerHTML = i;
    row.append(li);
    console.log(i);
    i = num;
}