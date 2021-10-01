function getCommonLetters(str1, str2) {
	let commonChars = [];
	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i]
		if (commonChars.includes(letter)) {
			continue
		} else if (str1.includes(letter)) {
			commonChars.push(letter)
		}
	}
    return "Common letters: " + commonChars.join(", ");
}
console.log(getCommonLetters("apples", "avocadoes"))

