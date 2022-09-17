// Assignment code here
var chars = 
   ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var charsLower =
  ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var specials =
   ['!','?','%'];
var numbers =
   ['1','2','3','4','5','6','7','8','9','0'];





var promptLength = window.prompt('Your password will be between 8 - 16 characters, Anwser "YES" if that is ok. "NO", if you want your password longer.');{

if (promptLength === "yes" || promptLength === "YES" ){
     window.alert("Password will be between 8 - 16 characters.")
} else if (promptLength === "no" || promptLength === "NO"){
    window.alert ("Password will be longer than 16 characters but shorter than 120")
} else {window.alert('You did not pick a valid option. Try again.') 

   
}
var promptChars = window.prompt('Do you want your password to include Capital Characters.')
if (promptLength === "yes" || promptLength === "YES" ){
    window.alert('Password will include Capital Characters.')
}  else if (promptLength === "no" || promptLength === "NO"){
    window.alert ("Password will not include Capital Characters")
}
    else {window.alert('You did not pick a valid option. Try again.');

}

var promptSpecials = window.prompt('Should your password include special characters')
if (promptLength === "yes" || promptLength === "YES" ){
    window.alert('Password will include Special Characters.')
}  else if (promptLength === "no" || promptLength === "NO"){
    window.alert ('Password will not include Special Characters')
}
    else {window.alert('You did not pick a valid option. Try again.');

}

var randomPass = function() {
var passLength = Math.floor(Math.random() * 16) + 20;

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate") 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}