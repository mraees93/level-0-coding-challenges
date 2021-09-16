function convertToHoursMinutes(number) {
	var hours = Math.floor(number / 60);
	var minutes = number % 60;
	if (hours === 1 && minutes === 1) {
		return hours + " hour, " + minutes + " minute."
	} else if (hours > 1 && minutes === 1) {
		return hours + " hours, " + minutes + " minute."
	} else if (hours < 1 && minutes > 1) {
		return minutes + " minutes."
	} else if (hours === 1 && minutes > 1) {
		return hours + " hour, " + minutes + " minutes."
	} else if (hours === 1 && minutes === 0) {
		return hours + " hour, " + minutes + " minutes."
	} else {
		return hours + " hours, " + minutes + " minutes."
	}
}
console.log(convertToHoursMinutes(61))
console.log(convertToHoursMinutes(71))
console.log(convertToHoursMinutes(133))
console.log(convertToHoursMinutes(560))

