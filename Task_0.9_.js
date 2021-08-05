function getAllVowels(str) {
    var allVowels = [];
    var vowels = "aeiouAEIOU";
    for(var i = 0; i < str.length; i ++) {
        var letter = str[i] //to access each letter from input string
        if(vowels.includes(letter)) {  //check if the vowels string includes any letters from input string
            allVowels.push(letter) //if it does then add those letters to allVowels array
        }
    }
    return "Vowels: " + allVowels.join(", ") //join method to return a string
}
console.log(getAllVowels("This is jAvAscript, not pythOn!"))
 
   
