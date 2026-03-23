/**
 * Calcola il costo del biglietto applicando sconti in base all'età
 * @param {number} age - Età del passeggero
 * @param {number} km - Chilometri da percorrere
 * @returns {number} Prezzo finale del biglietto
 */
function calcoloCostoBiglietto(age, km) {
    const ageNum = Number(age);
    const kmNum = Number(km);

    // Inizializza con tariffa standard
    tariffaApplicata = 'Standard';
    let costoBiglietto = kmNum * prezzoAlChilometro;

    // Applica sconto under 18 (20%)
    if (ageNum < 18) {
        tariffaApplicata = 'Under 18';
        costoBiglietto = costoBiglietto - (costoBiglietto * sconto20);
    }
    // Applica sconto over 65 (40%)
    else if (ageNum > 65) {
        tariffaApplicata = 'Over 65';
        costoBiglietto = costoBiglietto - (costoBiglietto * sconto40);
    }

    return costoBiglietto;
}

/**
 * Valida i dati inseriti nel form
 * Controlla: nome non vuoto, età tra 1 e 120, km > 0
 * Mostra messaggi di errore personalizzati
 * @returns {boolean} true se il form è valido, false altrimenti
 */
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

// ===== COSTANTI =====
// Prezzo base per chilometro e percentuali di sconto
const prezzoAlChilometro = 0.21;
const sconto20 = 0.2; // Sconto 20% per passeggeri under 18
const sconto40 = 0.4; // Sconto 40% per passeggeri over 65
let tariffaApplicata = ''; // Variabile per memorizzare il tipo di tariffa

// ===== SELEZIONE ELEMENTI DOM =====
// Input del form
const ageFieldEl = document.getElementById('ageField');
const kmFieldEl = document.getElementById('kmField');
const nameFieldEl = document.getElementById('nameField');
const form = document.getElementById('ticketForm');

// Elementi di output (biglietto)
const ageEl = document.getElementById('age');
const kmEl = document.getElementById('km');
const nameEl = document.getElementById('name');
const costoBigliettoEl = document.getElementById('costoBiglietto');
const tariffaEl = document.getElementById('tariffa');



// ===== EVENT LISTENER =====
// Ascolta il submit del form, valida i dati e calcola il biglietto
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene il reload della pagina

    // Esce se la validazione fallisce
    if (!validateForm()) return;

    // Calcola il prezzo e aggiorna l'interfaccia
    const costoBiglietto = calcoloCostoBiglietto(ageFieldEl.value, kmFieldEl.value);
    nameEl.innerHTML = nameFieldEl.value;
    ageEl.innerHTML = ageFieldEl.value + ' anni';
    kmEl.innerHTML = kmFieldEl.value + ' km';
    tariffaEl.innerHTML = tariffaApplicata;
    costoBigliettoEl.innerHTML = costoBiglietto.toFixed(2) + '€';
});)


