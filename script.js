// Assignment code here
var characterLength = 8;
var choice= [];
var specialCharArr = ['!','@','#','%','^','&','*','(',')','_','-','+','=','?','/','.'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','n','m','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','9','10'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getprompts(); //return true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
      var Password = generatePassword();
      passwordText.value = Password;
    } else {
      passwordText.value ="";
    }

}

function generatePassword(){
  // Using the prompts, I will generate a password
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var mixedIndex = Math.floor(Math.random() * choice.length)
      password = password + choice[mixedIndex];
  }
  return password;
}

function getprompts(){
  characterLength = parseInt(prompt("How  many characters do you want your password to be? (8 - 128 characters")); //NaN

   if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //i'm hoping that this is all false
       alert("character length has to be a number, 8 - 128 digits. Please try again.");
       return false;
   }

   if (confirm("would you like lowercase letters in your password?")) {
       choice = choice.concat(lowerCaseArr);
   }
   if (confirm("would you like uppercase letters in your password?")) {
       choice = choice.concat(upperCaseArr);
   }
   if (confirm("would you like special characters in your password?")) {
       choice = choice.concat(specialCharArr);
   }
   if (confirm("would you like numbers in your password?")) {
       choice = choice.concat(numberArr);
   }
return true;
}
