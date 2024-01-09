// Assignment code here



// Get references to the #generate element

function generatePassword()
var generateBtn = document.querySelector("#generate"); {

}
var uppercase = confirm("Your password should have an uppercase letter! Click OK to continue");
var lowercase = confirm("Your password should have a lowercase letter! Click OK to continue");
var symbols = confirm("Your password should have a symbol! Click OK to continue");
var numbers = confirm("Your password should have a number! Click OK to continue");
var keyLength = prompt("Password must be between 8 and 128 characters! Click OK to continue");
console.log("click the button")

var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
var specialSymbols = "!@#$%^&*()?.<\>|=+:;,[-_]"
var numeric = "0123456789"
var multiSelect = [];

if (keyLength < 8 || keyLength > 128) {
  alert("Your password does not meet the critia");
  var keyLength = prompt("Password must be between 8 and 128 characters in length.");

  if (uppercaseABC === false && lowercaseABC === false && specialSymbols === false && numeric === false) {
    return "Your passwords does not meet the password critia";
  };


  return "Generated password will go here!";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
