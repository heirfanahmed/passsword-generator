// Array of special characters to be included in password, if selected in the getPasswordOptions function
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password, if selected in the getPasswordOptions function
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password, if selected in the getPasswordOptions function
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password, if selected in the getPasswordOptions function
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// global variables to be used inside or outside functions
var getPassword;
var passwordCharacterLength = 10;
var choicearr = [];

// Function to prompt user for password options and show error if selected non-integer or characters less than 10 or greater than 64
function getPasswordOptions() {
  passwordCharacterLength = prompt("Please select number of characters you want your password to be? Please note the number should be between 10 and 64)");
  if (isNaN(passwordCharacterLength)) {
    alert("You need to select only INTEGERS!");
    return false;
  } else if (passwordCharacterLength < 10 || passwordCharacterLength > 64) {
    alert("You can select characters only between 10 & 64!");
    return false;
  }
  // confirm atleast one is selected
  if (confirm("Do you want special characters in your password?")) {
    choicearr = choicearr.concat(specialCharacters);
  }
  if (confirm("Do you want numeric characters in your password?")) {
    choicearr = choicearr.concat(numericCharacters);
  }
  if (confirm("Do you want alphabets with lower case in your password?")) {
    choicearr = choicearr.concat(lowerCasedCharacters);
  }
  if (confirm("Do you want alphabets with upper case in your password?")) {
      choicearr = choicearr.concat(upperCasedCharacters);      
    }
    return true;
  if (choicearr = null) {
     alert("Sorry, cannot generate password without selecting atleast one character choice!");    
     return false;
   }
  }

// just to see if the variable choicearr is working fine.
function consoleOutput() {
 console.log(choicearr);
}
 
console.log(getPassword);
// Function for getting a random element from an array
function getRandom(specialCharacters) {
//   const random = specialCharacters[Math-.floor(Math.random()*specialCharacters.length)];
//   alert(random,specialCharacters[random]);
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

if (confirm("Do you want to Generate Password")) {
  getPasswordOptions();
  consoleOutput();
}
  else {
  alert("See you later!");
};