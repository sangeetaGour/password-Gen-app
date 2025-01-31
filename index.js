function generatePassword() {
    const length = document.getElementById("length").value;
    const useLower = document.getElementById("lowercase").checked;
    const useUpper = document.getElementById("uppercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;
    
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]|:;<>,.?/";
    
    let allChars = "";
    if (useLower) allChars += lowerChars;
    if (useUpper) allChars += upperChars;
    if (useNumbers) allChars += numberChars;
    if (useSymbols) allChars += symbolChars;
    
    if (allChars === "") {
        alert("Please select at least one character type.");
        return;
    }
    
    let password = "";
    console.log("allChars:"+ allChars.length)
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        console.log("randomIndex:"+randomIndex)
        password += allChars[randomIndex];
        console.log("allChars:"+allChars[randomIndex] )
        
    }
    console.log("---------------> ")
    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}