function convertCelciusToFahrenheit(celciusTemp) {
	var fahrenheit = celciusTemp * 9 / 5 + 32;
	var fahrenheitTemp = celciusTemp + " is " + fahrenheit + " Degrees fahrenheit."
	return fahrenheitTemp
}
console.log(convertCelciusToFahrenheit(28))


function convertFahrenheitToCelcius(fahrenheitTemp) {
	var celcius = (fahrenheitTemp - 32) * 5 / 9;
	var celciusTemp = fahrenheitTemp + " is " + celcius + " Degrees celcius."
	return celciusTemp
}
console.log(convertFahrenheitToCelcius(99))