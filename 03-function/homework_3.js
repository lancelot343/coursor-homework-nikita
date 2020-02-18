const number = '933231';
function getMaxDigit(number) {
	let maxDigit = number[0];
	for (let i=0;i<number.length;i++)
	{
		if (maxDigit < number[i])
		{
			maxDigit = number[i];
		}
	}
	return maxDigit;
}

const num = 4;
const exp = 6;
function pow(num, exp) {
	let res;
	if (num===0)
	{
		res = 1;
	}
	else 
	{
		for (let i=0;i<exp;i++) 
		{
			res *= num;
		}
	}
	return res;
}

const Name = 'вЛАД';
function formatString(string) {
	let letter = "";
	let res = "";
	for (let i=0;i<Name.length;i++)
	{
		if (i === 0) {
			letter = Name[0].toUpperCase();
		}
		else
		{
			letter = Name[i].toLowerCase();
		}
		res += letter;
	}
	return res;
}

const salary = 1000;
const tax = 19.5;
function countSalary(salary, taxes) {
	let res;
	while (taxes > 100 || taxes < 0)
	{
		console.log("Taxes should be between 0 and 100 %!");
	}
	res = salary - (salary * taxes/100);
	return res;
}

const letter = "a";
const string = "Astalavista";
function countLetter(letter, string) {
	let counter = 0;
	string = string.toLowerCase();
	for (let i=0;i<string.length;i++) {
		if (string[i] === letter) {
			counter++;
		}
	}
	return counter;
}

function getRandomPassword(length=8) {
	let res = "";
	for (let i=0;i<length;i++) {
		res += String(Math.floor(Math.random() * 10));
	}
	return res;
}

document.writeln(
`
Функция №1: ${getMaxDigit(number)}
Функция №2: ${pow(num, exp)}
Функция №3: ${formatString(Name)}
Функция №4: ${countSalary(salary, tax)}
Функция №5: ${countLetter(letter, string)}
Функция №6: ${getRandomPassword()}
`);
