function getAreaOfTriangle(side1, side2, side3) {
	let sumOf3Sides = side1 + side2 + side3
	let perimeter = sumOf3Sides / 2;
	let area = perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3));
	return Math.sqrt(area) //if the value of the number is negative, Math.sqrt returns NaN
}
console.log(getAreaOfTriangle(9, 8, 4))

