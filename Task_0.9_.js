function getAllVowels(str) {
	var allVowels = [];
	var vowels = "aeiouAEIOU";
	for (var i = 0; i < str.length; i++) {
		var letter = str[i]
		if (vowels.includes(letter)) {
			allVowels.push(letter)
		}
	}
	var lowercaseVowels = allVowels.map(allVowels => allVowels.toLowerCase());
	var removeDuplicates = [...new Set(lowercaseVowels)]; //convert to set, then array
	console.log("Vowels: " + removeDuplicates.join(", "));
}
getAllVowels("Umuzi")
   
