// Assignment code here

function generatePassword(){
  //variables for password length and if the user input for the pass word length is valid
  var passwordLength = 0;
  var passwordLengthValid = false;
  //loops while the input for password length is invalid
  while(!passwordLengthValid){
    passwordLength = window.prompt("Enter the length of your password");
    passwordLengthValid = true;
    if((passwordLength < 8) || (passwordLength > 128) || (passwordLength == "") || (isNaN(passwordLength))){
      window.alert("Error, password length must be between 8-128 characters and must be a number");      
      passwordLengthValid = false;
      console.log("Still in password length loop");
    }
  }
  console.log("Loop is done, password length is: " + passwordLength);

  //variables to check if the generated password needs to include lowercase, uppercase, numerical, and/or special characters 
  var generateLowercase = false;
  var generateUppercase = false;
  var generateNumeric = false;
  var generateSpecial = false;
  
  var isRequirmentsValid = false;
  //while isRequirmentsValid is equal to false, keep asking the user for the requirments of thier password until atleast 1 option is true/selected
  while(!isRequirmentsValid){
    isRequirmentsValid = true;
    generateLowercase = window.confirm("Do you want lowercase characters in your password?");
    generateUppercase = window.confirm("Do you want uppercase characters in your password?");
    generateNumeric = window.confirm("Do you want numbers in your password?");
    generateSpecial = window.confirm("Do you want special characters in your password?");
    if((!generateLowercase) && (!generateUppercase) && (!generateNumeric) && (!generateSpecial)){
      window.alert("Error, you must accept atleast one of the following to allow your password to generate: Lowercase, Uppercase, Numerical, Special Characters");
      isRequirmentsValid = false;
      console.log("still in requirments loop");
    }
  }
  console.log("Exited Loop");
  console.log(generateLowercase, generateUppercase, generateNumeric, generateSpecial);



  //variables that hold the generated password, and the character set availible to generate the password with/from
  var password = "";
  var characterSet = "";

  //Making the appropriate character set for this passwords requirements
  if(generateLowercase){
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if(generateUppercase){
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(generateNumeric){
    characterSet += "0123456789";
  }
  if(generateSpecial){
    characterSet += " !\"#$%&'()*+,-/:;<=>?@[\\]^_`{|}~";
    //console.log(" !\"#$%&'()*+,-/:;<=>?@[\\]^_`{|}~");
  }
  console.log(characterSet);

  //generating random password by selecting random indexs of the characterset
  for(var c = 0; c < passwordLength; c++){
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  console.log(password);
  return password;//return the newly generated random password
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
