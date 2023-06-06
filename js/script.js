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
