function convertToHoursMinutes(number) {
	const hours = Math.floor(number / 60);
	const minutes = number % 60;
	let hour = "hour"
	let minute = "minute"
	if (hours === 0 || hours > 1) {
		hour += "s"
	}
	if(minutes === 0 || minutes > 1) {
		minute += "s"
	}
	return `${hours} ${hour}, ${minutes} ${minute}`
}
console.log(convertToHoursMinutes(1))
console.log(convertToHoursMinutes(71))
console.log(convertToHoursMinutes(133))
console.log(convertToHoursMinutes(560))