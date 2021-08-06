function commonLetters(str1, str2) {
    var commonChars = [];
    for(var i = 0; i < str2.length; i ++) {
        var letter = str2[i] 
        if(str1.includes(letter)) { 
            commonChars.push(letter) 
        }
    }
    var lowercaseChars = commonChars.map(commonChars => commonChars.toLowerCase());
    var removedDuplicates = [...new Set(lowercaseChars)]; //convert to set, then array 
    return "Common letters: " + removedDuplicates.join(", ");
}
console.log(commonLetters("apples", "avocadoes"))

