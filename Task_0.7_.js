function convertCelciusToFahrenheit(celciusTemp) {
	let fahrenheit = celciusTemp * 9 / 5 + 32;
	let fahrenheitTemp = celciusTemp + " is " + fahrenheit + " Degrees fahrenheit."
	return fahrenheitTemp
}
console.log(convertCelciusToFahrenheit(28))


function convertFahrenheitToCelcius(fahrenheitTemp) {
	let celcius = (fahrenheitTemp - 32) * 5 / 9;
	let celciusTemp = fahrenheitTemp + " is " + celcius + " Degrees celcius."
	return celciusTemp
}
console.log(convertFahrenheitToCelcius(99))