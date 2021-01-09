function generatePassword(length,numbers,symbols) {

    const ALPHA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    const NUMBERS = ["0","1","2","3","4","5","6","7","8","9"];

    const SYMBOLS = ["~","!","@","#","$","%","^","&","*","(",")","-","+","{","}","[","]","\\",":","'","<",">",",",".","/","?","="];

    var CHARACTERS = [ALPHA];

    if (numbers) {
        CHARACTERS.push(NUMBERS);
    }

    if (symbols) {
        CHARACTERS.push(SYMBOLS);
    }

    var generatedpassword = "";

    for (var i = 0; i < length; i++) {
        var generator = generateRandomNumber(CHARACTERS.length);
        generatedpassword = generatedpassword + CHARACTERS[generator][generateRandomNumber(CHARACTERS[generator].length)];
    }

    return generatedpassword;
}

function generateRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

exports.generatePassword = function(length,includeNumbers,includeSymbols) {
    return generatePassword(length, includeNumbers, includeSymbols);
}