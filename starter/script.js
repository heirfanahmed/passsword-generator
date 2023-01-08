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


// Get references to the element #generate.
var generateBtn = document.querySelector('#generate');

// Add event listener to button #generate.
generateBtn.addEventListener('click', writePassword);

// Global variables to be used inside or outside functions
var passwordLength = 10;
var choicearr = [];

// Function to prompt user for password options and show error if non-integer, characters less than 10 or characters greater than 64 is selected.
function getPasswordOptions() {
  choicearr = [];
  passwordLength = prompt("Please select number of characters you want your password to be? Please note the number should be between 10 and 64)");
  if (isNaN(passwordLength)) {
    alert("You need to select only INTEGERS!");
    return false;
  } else if (passwordLength < 10 || passwordLength > 64) {
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
  }


// Function to generate password if user input meets all the conditions of function getPasswordOptions().
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * choicearr.length);
    password += choicearr[randomIndex];
  }
  return password;
  }

// Function to write password to #password.
function writePassword() {
  var correctPrompts = getPasswordOptions();
  var passwordText = document.querySelector('#password');
 
  if (getPasswordOptions) {
  var password = generatePassword();
  passwordText.value = password;
  } else {
  passwordText.value = "";
  }
  }