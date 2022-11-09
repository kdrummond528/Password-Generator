// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var generatedPassword = "";

  var length = prompt("Length of the password. Must be between 8-128.", 8);
  if (length < 8 || length > 128) {
    alert("Error: length is not within 8-128 characters");
    return generatedPassword;
  }

  var chars = "";
  var useUppercase = confirm("Do you want to include uppercase? Click OK for yes.");
  if (useUppercase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var useLowercase = confirm("Do you want to include lowercase? Click OK for yes.");
  if (useLowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  var useNumeric = confirm("Do you want to include numeric symbols? Click OK for yes.");
  if (useNumeric) {
    chars += "0123456789";
  }

  var useSpecial = confirm("Do you want to include special characters? Click OK for yes.");
  if (useSpecial) {
    chars += "!@#$%^&*()";
  }

  if (!useUppercase && !useLowercase && !useNumeric && !useSpecial) {
    alert("Error.");
    return generatedPassword;
  }

  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    generatedPassword += chars.substring(randomNumber, randomNumber + 1);
  }

  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
