function commonLetters(str1, str2) {
    var commonChars = [];
    var str1;
    for(var i = 0; i < str2.length; i ++) {
        var letter = str2[i] //to access each letter from input string
        if(str1.includes(letter)) { //check if the string 1 includes any letters from string 2
            commonChars.push(letter) //if it does then add those letters to commonChars array
        }
    }
    return "Common letters: " + commonChars.join(", ") //join method to return a string
}
console.log(commonLetters("apples", "avocadoes"))

