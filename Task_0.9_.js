function getAllVowels(str) {
	let allVowels = [];
	let vowels = "aeiouAEIOU";
	for (let i = 0; i < str.length; i++) {
		let letter = str[i]
		if (vowels.includes(letter)) {
			allVowels.push(letter)
		}
	}
	let lowercaseVowels = allVowels.map(allVowels => allVowels.toLowerCase());
	let removeDuplicates = [...new Set(lowercaseVowels)]; //convert to set, then array
	console.log("Vowels: " + removeDuplicates.join(", "));
}
getAllVowels("Umuzi")
   
