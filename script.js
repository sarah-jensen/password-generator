// arrays of character sets
const lowerCase = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,]
const upperCase = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,]
const numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,]
const special = [!,@,#, $,%,^,&,*, (,), +, -, /,.,<,=,>,?,[,],_,{,},~,]

// Assignment Code
var generateBtn = document.querySelector("#generate");


// var confirmLowercase
// var confirmUppercase
// var confirmNumeral
// var confirmSpecial



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // determine how many characters long the password should be
  const passwordLength = function () {
    const howLong = prompt('How long do you want your password to be? Enter a number from 8-128.');
    // alert for non-numbers
    if (howLong.includes(lowerCase)) {
      alert('You must enter a valid number.');
      return;
    } else if (howLong.includes(upperCase)) {
      alert('You must enter a valid number.');
      return;
    } else if (howLong.includes(special)) {
      alert('You must enter a valid number.');
      return;
    }

    const confirmLowercase = confirm('Are lowercase letters required?');
    if confirmLowercase = true {
      // include lowerCase in required character set
    } else {
      // include lowerCase in optional character set
    }

    const confirmUppercase = confirm('Are uppercase letters required?');
    if confirmUppercase = true {
      // include upperCase in required character set
    } else {
      // include upperCase in optional character set
    }

    const confirmNumeral = confirm('Are numerals required?');
    if confirmNumeral = true {
      // include numeral in required character set
    } else {
      // include numeral in optional character set
    }

    const confirmSpecial = confirm ('Are special characters required?');
    if confirmSpecial = true {
      // include special in required character set
    } else {
      // include special in optional character set
    }
  }



  passwordText.value = password;

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page