// creo una funzione che prende età e km e restituisce il costo del biglietto
function calcoloCostoBiglietto (age, km){
    const costoBiglietto = km * prezzoAlChilometro;
    // SE il passeggero ha meno di 18 anni, al risultato verrà scontato il 20%
    if (age < 18) {
        return costoBiglietto - costoBiglietto * sconto20;
    }
    // ALTRIMENTI SE il passeggero ha più di 65 anni, al risultato verrà scontato il 40%
    else if (age > 65) {
        return costoBiglietto - costoBiglietto * sconto40;
    } else {
    //
        return  costoBiglietto;
    }
}

//creo la costante in cui metto il prezzo a km e le costanti per gli sconti
const prezzoAlChilometro = 0.21;
const sconto20 = 0.2; //sconto 20%
const sconto40 = 0.4; //sconto 40%

//seleziono gli input e il button
const ageEl = document.getElementById('ageField');
const kmEl = document.getElementById('kmField');
const calcolaEl = document.getElementById('calcolaBtn');


//creo un evento sul click del pulsante in cui calcolo il costo del biglietto e lo stampo in console
calcolaEl.addEventListener('click', ()=>{
    const costoBiglietto = calcoloCostoBiglietto(ageEl.value, kmEl.value);
    console.log(`Il biglietto per percorrere ${kmEl.value} km per un passeggero di ${ageEl.value} anni è di ${costoBiglietto.toFixed(2)} euro`)
})





