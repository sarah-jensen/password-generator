// arrays of character sets
const lowerCase = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,];
const upperCase = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,];
const numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
const special = [!, @, #, \$, %, ^, &, *, +, -, /, ., <, =, >, ?, _, ~,];

// required characterset
var includeThese = [];
var password = ' ';
const passwordText = document.querySelector("#password");
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*
function writePassword() {
  var password = generatePassword();
  passwordText.textContent = password.join(' ');

  passwordText.value = password;
  */
 
// Capture user input
// determine how many characters long the password should be
const howLong = prompt('How long do you want your password to be? Enter a number from 8-128.');
if (howLong.includes(numeral)) {
  var length = howLong;
  // alert for non-numbers
} else {
  alert('You must enter a valid number.');
}

// confirm types of character sets to be included
const confirmLowercase = confirm('Include lowercase letters?');
if (confirmLowercase) {
  // include lowerCase in required character set
  includeThese.push(lowerCase)
}

const confirmUppercase = confirm('Include uppercase letters?');
if (confirmUppercase) {
  // include upperCase in required character set
  includeThese.push(UpperCase);
}

const confirmNumeral = confirm('Include numerals?');
if (confirmNumeral) {
  // include numeral in required character set
  includeThese.push(numeral);
}

const confirmSpecial = confirm('Include special characters?');
if (confirmSpecial) {
  // include special in required character set
  includeThese.push(special);
}

function generatePassword() {

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// // GIVEN I need a new, secure password
// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria
// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password
// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters
// // WHEN asked for character types to include in the password
// // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected
// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria
// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page