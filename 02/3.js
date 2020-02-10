let n = Number(prompt("Type n:"));
let m = Number(prompt("Type m:"));

while (!Number.isInteger(n)) {
	n = Number(prompt("Type integer!"));
}

while (!Number.isInteger(m)) {
	m = Number(prompt("Type integer!"));
}

if (n > m)
{
	m = Number(prompt("M should be greater then n. Try again"));
}

let skip = confirm("Skip odd numbers?");

let result = 0;
for (let i=n;i<=m;i++)
{
	if (skip)
	{
		if (i % 2 != 0)
		{
			result += i;
		}	
	}
	else
	{
		result += i;
	}
}
console.log(skip)
console.log(result);
