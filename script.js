// arrays of character sets
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
const numeral = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
const special = ['!', '@', '#', '\$', '%', '^', '&', '*', '+', '-', '/', '.', '<', '=', '>', '?', '_', '~',];

// required characterset based on user input
var requiredChar = [];
// array of randomized characters of user-specified length
var pwdArray = [];

const passwordText = document.querySelector("#password");
const generateBtn = document.querySelector("#generate");


function writePassword() {
  // Capture user input
  // determine how many characters long the password should be
  var howLong = prompt('How long do you want your password to be? Enter a number from 8-128.');
  // alert for too short or too long
  if (howLong <= 7 || howLong > 128) {
    alert('You must enter a valid number.');
    return;
    // alert for NaN
  } else if (howLong.includes(lowercase) || howLong.includes(uppercase) || howLong.includes(special)) {
    alert('You must enter a valid number.');
    return;
  } else {
    // change user entered length from string to number
    var pwdchar = parseInt(howLong);
    console.log(pwdchar);
  }

  // confirm types of character sets to be included
  const confirmLowercase = confirm('Include lowercase letters?');
  if (confirmLowercase) {
    // include lowerCase in required character set
    requiredChar = lowercase;
    console.log(requiredChar);
  } else {
    console.log("no lowerCase");
  }

  const confirmUppercase = confirm('Include uppercase letters?');
  if (confirmUppercase && confirmLowercase) {
    // include lowerCase and upperCase in required character set
    requiredChar = lowercase.concat(uppercase);
    console.log(requiredChar);
  } else if (confirmUppercase) {
    // include upperCase
    requiredChar = uppercase;
    console.log(requiredChar)
  } else {
    console.log("no uppercase");
  }

  const confirmNumeral = confirm('Include numerals?');
  if (confirmLowercase && confirmUppercase && confirmNumeral) {
    // include lowercase, uppercase, and numeral in required character set
    requiredChar = lowercase.concat(uppercase, numeral);
    console.log(requiredChar);
  } else if (confirmLowercase && confirmNumeral) {
    // include lowercase and numeral only
    requiredChar = lowercase.concat(numeral);
    console.log(requiredChar);
  } else if (confirmUppercase && confirmNumeral) {
    // include uppercase and numeral only
    requiredChar = uppercase.concat(numeral);
    console.log(requiredChar);
  } else if (confirmNumeral) {
    // include numeral only
    requiredChar = numeral;
    console.log(requiredChar)
  } else {
    console.log("no numerals");
  }

  const confirmSpecial = confirm('Include special characters?');
  if (confirmLowercase && confirmUppercase && confirmNumeral && confirmSpecial) {
    // include all in required character set
    requiredChar = lowercase.concat(uppercase, numeral, special);
    console.log(requiredChar);
  } else if (confirmLowercase && confirmUppercase && confirmSpecial) {
    // include lowercase, uppercase, and special
    requiredChar = lowercase.concat(uppercase, special);
    console.log(requiredChar);
  } else if (confirmLowercase && confirmNumeral && confirmSpecial) {
    // include lowercase, numeral, and special
    requiredChar = lowercase.concat(numeral, special);
    console.log(requiredChar);
  } else if (confirmUppercase && confirmNumeral && confirmSpecial) {
    // include uppercase, numeral, and special
    requiredChar = uppercase.concat(numeral, special);
    console.log(requiredChar);
  } else if (confirmLowercase && confirmSpecial) {
    // include lowercase and special
    requiredChar = lowercase.concat(special);
    console.log(requiredChar);
  } else if (confirmUppercase && confirmSpecial) {
    // include uppercase and special
    requiredChar = uppercase.concat(special);
    console.log(requiredChar);
  } else if (confirmNumeral && confirmSpecial) {
    // include numeral and special
    requiredChar = numeral.concat(special);
    console.log(requiredChar);
  } else if (confirmSpecial) {
    // include special only
    requiredChar = special;
    console.log(requiredChar);
  } else {
    console.log("no special characters");
  }

  const randomize = function () {
    for (i = 0; i < pwdchar; i++) {
      // randomly select characters from array of user selected character sets
      var char = requiredChar[Math.floor(Math.random() * requiredChar.length)];
      // pushes characters to pwdArray
      pwdArray.push(char);
      console.log(char);
    }
    console.log(pwdArray);
  }

  randomize();

  function displayPassword() {
    // Write password to the #password text area
    passwordText.innerHTML = pwdArray.join('');
  }

  displayPassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

