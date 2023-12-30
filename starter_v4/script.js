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
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var uppercaseEl = document.getElementById('special');
var lengthEl = document.getElementById("lengthpass");

// variables which select one random variable from an array:
var randomSpecial = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
var randomNumeric = numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
var randomLower = lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
var randomUpper = upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];
var allChars = upperCasedCharacters + lowerCasedCharacters +numericCharacters + specialCharacters;

// function which generastes password

function generateRandom(passwordLength) {
  var password = "";
  
  while(length > password.length) {
    password += allChars[Math.floor(Math.random()*allChars.length)];
  }
  passwordText.value = password;
}

function generateRandomUpper() {
  var password = "";
  
  while(length > password.length) {
    password += randomUpper;
  }
  passwordText.value = password;
}

function generateRandomSpecial() {
  var password = "";
  
  while(length > password.length) {
    password += randomSpecial;
  }
  passwordText.value = password;
}

function generateRandomNum() {
  var password = "";
  
  while(length > password.length) {
    password += randomNumeric;
  }
  passwordText.value = password;
}

function generateRandomLower() {
  var password = "";
  
  while(length > password.length) {
    password += randomLower;
  }
  passwordText.value = password;
}

// if (uppercaseEl === 'checked') {


// }