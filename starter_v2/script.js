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

// text box
var passwordText = document.getElementById('password');
var length = 9;

// variables which select one random variable from an array:
var randomSpecial = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
var randomNumeric = numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
var randomLower = lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
var randomUpper = upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];
var allChars = upperCasedCharacters + lowerCasedCharacters +numericCharacters + specialCharacters;

// Function to prompt user for password options

var desiredLength = prompt('Enter Your Password Length:');
desiredLength = parseInt(desiredLength);

// form validation
if(isNaN(desiredLength) && desiredLength <=8 && desiredLength >= 128) {
  alert('invalid');
} else {
  var generateString = generateRandomString(desiredLength);
  console.log('Generated', generateString);
}


// function which generastes password
function generateRandom() {
  var password = "";
  password += randomLower;
  password += randomNumeric;
  password += randomSpecial;
  password += randomUpper;

  while(length > password.length) {
    password += allChars[Math.floor(Math.random()*allChars.length)];
  }
  passwordText.value = password;
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// Write password to the #password input

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// Add event listener to generate button

// var button = document.getElementById('generate').addEventListener('click', buttonClick);
// function buttonClick() {
//   console.log('button pressed');
//   alert('password');
// }

// generateBtn.addEventListener('click', writePassword);