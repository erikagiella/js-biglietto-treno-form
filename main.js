// creo una funzione che prende età e km e restituisce il costo del biglietto
function calcoloCostoBiglietto(age, km) {
    const ageNum = Number(age);
    const kmNum = Number(km);

    tariffaApplicata = 'Standard';
    let costoBiglietto = kmNum * prezzoAlChilometro;

    // SE il passeggero ha meno di 18 anni, al risultato verrà scontato il 20%
    if (ageNum < 18) {
        tariffaApplicata = 'Under 18';
        costoBiglietto = costoBiglietto - (costoBiglietto * sconto20);
    }
    // ALTRIMENTI SE il passeggero ha più di 65 anni, al risultato verrà scontato il 40%
    else if (ageNum > 65) {
        tariffaApplicata = 'Over 65';
        costoBiglietto = costoBiglietto - (costoBiglietto * sconto40);
    }

    return costoBiglietto;
}

//funzione di validazione dei dati del form
function validateForm() {
    let isValid = true;

    // Validazione nome
    if (!nameFieldEl.value.trim()) {
        document.getElementById('nameError').textContent = 'Il nome è obbligatorio.';
        nameFieldEl.classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
        nameFieldEl.classList.remove('is-invalid');
    }

    // Validazione età
    const age = Number(ageFieldEl.value);
    if (isNaN(age) || age < 1 || age > 120) {
        document.getElementById('ageError').textContent = 'Inserisci un\'età valida (1-120 anni).';
        ageFieldEl.classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('ageError').textContent = '';
        ageFieldEl.classList.remove('is-invalid');
    }

    // Validazione km
    const km = Number(kmFieldEl.value);
    if (isNaN(km) || km <= 0) {
        document.getElementById('kmError').textContent = 'Inserisci chilometri validi (>0).';
        kmFieldEl.classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('kmError').textContent = '';
        kmFieldEl.classList.remove('is-invalid');
    }

    return isValid;
}

//creo la costante in cui metto il prezzo a km e le costanti per gli sconti
const prezzoAlChilometro = 0.21;
const sconto20 = 0.2; //sconto 20%
const sconto40 = 0.4; //sconto 40%
let tariffaApplicata = '';

//seleziono gli input e il form
const ageFieldEl = document.getElementById('ageField');
const kmFieldEl = document.getElementById('kmField');
const calcolaEl = document.getElementById('calcolaBtn');
const nameFieldEl = document.getElementById('nameField');
const form = document.getElementById('ticketForm');

//seleziono gli elementi di output
const ageEl = document.getElementById('age');
const kmEl = document.getElementById('km');
const nameEl = document.getElementById('name');
const costoBigliettoEl = document.getElementById('costoBiglietto');
const tariffaEl = document.getElementById('tariffa');



//creo un event listener sul submit del form 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const costoBiglietto = calcoloCostoBiglietto(ageFieldEl.value, kmFieldEl.value);
    nameEl.innerHTML = nameFieldEl.value;
    ageEl.innerHTML = ageFieldEl.value + ' anni';
    kmEl.innerHTML = kmFieldEl.value + ' km';
    tariffaEl.innerHTML = tariffaApplicata;
    costoBigliettoEl.innerHTML = costoBiglietto.toFixed(2) + '€';
})


