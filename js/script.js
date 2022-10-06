// DATA
const underAge = 18;
const underDiscount = 20;
const overAge = 65;
const overDiscount = 40;
let priceKm = 0.21;

// INPUT
const km = parseFloat(prompt("Inserire il numero di chilometri da percorrere"));
console.log(km, typeof km);
const age = parseInt(prompt("Inserire l'età del passeggero"));
console.log(age, typeof age);

// ELABORATION
let price = 0;
if (age < underAge) {
    priceKm *= 1 - (underDiscount / 100);
} else if (age > overAge) {
    priceKm *= 1 - (overDiscount / 100);
}
console.log(priceKm, typeof priceKm);
price = (km * priceKm).toFixed(2);

// OUTPUT
document.getElementById("priceTxt").innerHTML += `${price} €`;