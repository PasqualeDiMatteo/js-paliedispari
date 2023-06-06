console.log("JSOK");

// Recupero gli elementi

const palindromeElement = document.querySelector("#pali input");
const palindromeBtn = document.querySelector("#pali button");
const palindromeResult = document.getElementById("palindrome-result");

// Creiamo una funzione

function isPalindrome(word) {
  let newWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word.at(i);
  }

  return word === newWord;
}

// Event Listener

palindromeBtn.addEventListener("click", function () {
  const userWord = palindromeElement.value.trim();

  //   Stampiamo in pagina "Non è Palindrome"

  if (!userWord) return;

  let result = "<strong>NON E'</strong>";

  //   Stampiamo in pagina "E' Palindrome"

  const palindrome = isPalindrome(userWord);

  if (palindrome) result = "<strong>E'</strong>";

  const message = `'${userWord}' ${result} Palindrome!`;

  palindromeResult.innerHTML = message;
});

// -------------------- Pari Dispari --------------------------

const evenElement = document.querySelector("#even input");
const evenBtn = document.querySelector("#even button");
const evenResult = document.getElementById("even-result");
const selectElement = document.getElementById("select-input");

// Creiamo le funzioni

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function isEven(number) {
  return !(number % 2);
}

// Event Listener

evenBtn.addEventListener("click", function () {
  const userNumber = parseInt(evenElement.value);

  const userChoice = selectElement.value;

  const cpuNumber = randomNumber(1, 5);

  //  Sommiamo i due numeri

  const sum = userNumber + cpuNumber;

  const resultEven = isEven(sum);

  // Controllo

  let result = "Ha vinto la CPU !";

  if (
    (resultEven && userChoice === "even") ||
    (!resultEven && userChoice === "odd")
  ) {
    result = "Ha vinto l'utente !";
  }

  //   Stampo il messaggio

  const message = `${result} Numero della CPU:${cpuNumber}`;

  evenResult.innerHTML = message;
});
