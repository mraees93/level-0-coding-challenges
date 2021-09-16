function getMaximumNumber(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1 + " is the maximum number."
	} else if (num2 > num1 && num2 > num3) {
		return num2 + " is the maximum number."
	} else {
		return num3 + " is the maximum number."
	}
}
console.log(getMaximumNumber(3, 4, 2))



