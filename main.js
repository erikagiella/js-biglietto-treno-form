// creo una funzione che prende età e km e restituisce il costo del biglietto
function calcoloCostoBiglietto(age, km) {
    const costoBiglietto = km * prezzoAlChilometro;
    // SE il passeggero ha meno di 18 anni, al risultato verrà scontato il 20%
    if (age < 18) {
        tariffaApplicata = 'Under 18';
        return costoBiglietto - costoBiglietto * sconto20;
    }
    // ALTRIMENTI SE il passeggero ha più di 65 anni, al risultato verrà scontato il 40%
    else if (age > 65) {
        tariffaApplicata = 'Over 65';
        return costoBiglietto - costoBiglietto * sconto40;
    } else {
        tariffaApplicata = 'Standard';
        return costoBiglietto;
    }
}

//creo la costante in cui metto il prezzo a km e le costanti per gli sconti
const prezzoAlChilometro = 0.21;
const sconto20 = 0.2; //sconto 20%
const sconto40 = 0.4; //sconto 40%
let tariffaApplicata = '';

//seleziono gli input e il button
const ageFieldEl = document.getElementById('ageField');
const kmFieldEl = document.getElementById('kmField');
const calcolaEl = document.getElementById('calcolaBtn');
const nameFieldEl = document.getElementById('nameField');

//seleziono gli elementi di output
const ageEl = document.getElementById('age');
const kmEl = document.getElementById('km');
const nameEl = document.getElementById('name');
const costoBigliettoEl = document.getElementById('costoBiglietto');
const tariffaEl = document.getElementById('tariffa');

// //creo un evento sul click del pulsante in cui calcolo il costo del biglietto e lo stampo in console
// calcolaEl.addEventListener('click', ()=>{
//     const costoBiglietto = calcoloCostoBiglietto(ageFieldEl.value, kmFieldEl.value);
//     console.log(`Il biglietto per percorrere ${kmFieldEl.value} km per un passeggero di ${ageFieldEl.value} anni è di ${costoBiglietto.toFixed(2)} euro`)
// })

//creo un event listener sul submit del form 
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const costoBiglietto = calcoloCostoBiglietto(ageFieldEl.value, kmFieldEl.value);
    nameEl.innerHTML = nameFieldEl.value;
    ageEl.innerHTML = ageFieldEl.value + 'anni';
    kmEl.innerHTML = kmFieldEl.value + 'km';
    tariffaEl.innerHTML = tariffaApplicata;
    costoBigliettoEl.innerHTML = costoBiglietto.toFixed(2) + '€';
})


