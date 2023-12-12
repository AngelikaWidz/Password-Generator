// Array of special characters to be included in password
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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

// Function to prompt user for password options

function getPasswordOptions() {
var password = prompt("Enter your ");
if (password.length <= 8 && password.length >= 128 ) {
    alert("Password Length Invalid");
    return getPasswordWithStrengthCheck();
} else {
    return password;
}
}

var userPassword = getPasswordOptions();
console.log("User entered password:", userPassword);


// Function for getting a random element from an array
function getRandom(arr) {

// variables which select one random variable from an array:
var randomSpecial = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
var randomNumeric = numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
var randomLower = lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
var randomUpper = upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];

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
var button = document.getElementById('generate').addEventListener('click', buttonClick);
function buttonClick() {
  alert('password');
}

// generateBtn.addEventListener('click', writePassword);