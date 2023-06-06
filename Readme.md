# Pali e Dispari

## Traccia

### Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.

### Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

---

## Steps

### Palidroma

1. Recupero dal Dom l'elemento
2. Creiamo una funzione
   - valore falso
   - **SE** la parola inserita è uguale alla parola capovolta
     - Inserire vero
   - **Altrimenti** Rimane Falso
3. Stampiamo in pagina

   - **SE** il risultato è vero, " E' Palindroma "
   - **Altimenti** "Non è Palindroma"

---

### Pari e Dispari

1. Recupero dal Dom l'elemento dove l'utente sceglie un numero da 1 a 5
2. Creiamo una funzione che generi un numero da 1 a 5
3. la GPU genera un numero random
4. Sommiamo i due numeri
5. Creiamo una funzione dove mettiamo un modulo
   - **SE** il numero non da resto è **VERO**
   - **ALTRIMENTI** e **FALSO**
6. **SE** l'utente seleziona pari e il risultato è **VERO**
   - Stampiamo "L'utente ha vinto"
7. **ALTRIMENTI**
   - Stampiamo "La CPU ha vinto"
