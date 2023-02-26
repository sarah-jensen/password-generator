// arrays of character sets
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
const numeral = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];
const special = ['!', '@', '#', '\$', '%', '^', '&', '*', '+', '-', '/', '.', '<', '=', '>', '?', '_', '~', ];

// required characterset
var includeThese = [];
var password = [];
const passwordText = document.querySelector("#password");
const generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  // var password = generatePassword();

  // passwordText.value = password;
  // passwordText.textContent = password.join(' ');


  // Capture user input
  // determine how many characters long the password should be
  const howLong = prompt('How long do you want your password to be? Enter a number from 8-128.');
  // alert for too short or too long
  if (howLong <= 7 || howLong > 128) {
    alert('You must enter a valid number.');
    return;
    // alert for NaN
  } else if (howLong.includes(lowercase) || howLong.includes(uppercase) || howLong.includes(special)) {
    alert('You must enter a valid number.');
    return;
  } else {
    var length = howLong;
    parseInt(howLong);
    console.log(howLong);
  }

  // confirm types of character sets to be included
  const confirmLowercase = confirm('Include lowercase letters?');
  if (confirmLowercase) {
    // include lowerCase in required character set
    includeThese = lowercase;
    console.log(includeThese);
  } else {
    console.log("no lowerCase");
  }

  const confirmUppercase = confirm('Include uppercase letters?');
  if (confirmUppercase && confirmLowercase) {
    // include lowerCase and upperCase in required character set
    includeThese = [lowercase + uppercase];
    console.log(includeThese);
  } else if (confirmUppercase) {
    // include upperCase
    includeThese = uppercase;
    console.log(includeThese)
  } else {
    console.log("no uppercase");
  }

  const confirmNumeral = confirm('Include numerals?');
  if (confirmLowercase && confirmUppercase && confirmNumeral) {
    // include lowercase, uppercase, and numeral in required character set
    includeThese = [lowercase + uppercase + numeral];
    console.log(includeThese);
  } else if (confirmLowercase && confirmNumeral) {
    // include lowercase and numeral only
    includeThese = [lowercase + numeral];
    console.log(includeThese);
  } else if (confirmUppercase && confirmNumeral) {
    // include uppercase and numeral only
    includeThese = [uppercase + numeral];
    console.log(includeThese);
  } else if (confirmNumeral) {
    // include numeral only
    includeThese = numeral;
    console.log(includeThese)
  } else {
    console.log("no numerals");
  }

  const confirmSpecial = confirm('Include special characters?');
  if (confirmLowercase && confirmUppercase && confirmNumeral && confirmSpecial) {
    // include all in required character set
    includeThese = [lowercase + uppercase + numeral + special];
    console.log(includeThese);
  } else if (confirmLowercase && confirmUppercase && confirmSpecial) {
    // include lowercase, uppercase, and special
    includeThese = [lowercase + uppercase + special];
    console.log(includeThese);
  } else if (confirmLowercase && confirmNumeral && confirmSpecial) {
    // include lowercase, numeral, and special
    includeThese = [lowercase + numeral + special];
    console.log(includeThese);
  } else if (confirmUppercase && confirmNumeral && confirmSpecial) {
    // include uppercase, numeral, and special
    includeThese = [uppercase + numeral + special];
    console.log(includeThese);
  } else if (confirmLowercase && confirmSpecial) {
    // include lowercase and special
    includeThese = [lowercase + special];
    console.log(includeThese);
  } else if (confirmUppercase && confirmSpecial) {
    // include uppercase and special
    includeThese = [uppercase + special];
    console.log(includeThese);
  } else if (confirmNumeral && confirmSpecial) {
    // include numeral and special
    includeThese = [numeral + special];
    console.log(includeThese);
  } else if (confirmSpecial) {
    // include special only
    includeThese = special;
    console.log(includeThese);
  } else {
    console.log("no special characters");
  }


}

}
//   return password.push

// }






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