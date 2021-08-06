function getAllVowels(str) {
    var allVowels = [];
    var vowels = "aeiouAEIOU";
    for(var i = 0; i < str.length; i ++) {
        var letter = str[i] 
        if(vowels.includes(letter)) {  
            allVowels.push(letter) 
        }
    }
    var lowercaseVowels = allVowels.map(allVowels => allVowels.toLowerCase());
    var removedDuplicates = [...new Set(lowercaseVowels)]; //convert to set, then array
    return "Vowels: " + removedDuplicates.join(", ");
}
console.log(getAllVowels("Umuzi"))
 
   
