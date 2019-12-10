"use strict";

const fs = require('fs');
const contents = fs.readFileSync('input', 'utf8');
const arr = contents.split('\n');

const ans = arr.reduce((sum, mass) => {
	const fule = Math.floor((+mass)/3) - 2;
	return sum + fule + calculateFuelForFuleMass(fule);
}, 0)

function calculateFuelForFuleMass(mass) {
	const fule = (Math.floor(mass/3)) - 2;
	console.log(fule);
	if (fule < 0) return 0;
	return fule + calculateFuelForFuleMass(fule);
}

console.log(ans);