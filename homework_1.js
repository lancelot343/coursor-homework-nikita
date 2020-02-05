let balls = 15.678;
let oranges = 123.965;
let pineapples = 90.2345;

let max = Math.max(balls, oranges, pineapples);

let min = Math.min(balls, oranges, pineapples)

let sum = balls + oranges + pineapples;

let smaller_prices = Math.floor(balls) + Math.floor(oranges) + Math.floor(pineapples);

let smaller_sum = Math.ceil(sum/100)*100;

const res = smaller_sum % 2 == 0;

let change = 500.0 - sum;

let average = (sum/3).toFixed(2)

let discount = Math.random().toFixed(2);

let product = oranges + pineapples;

let price = Math.trunc((product-(product*discount)));

let missed_cash = Math.abs(Math.floor((product/2) - price));

console.log
(`
	Максимальная цена: ${max}
	Минимальная цена: ${min}
	Сумма цен: ${sum}
	Округленная сумма с целыми частями стоимости товаров: ${smaller_prices}
	Сумма, Округленная до сотен: ${smaller_sum}
	Четное?: ${res}
	Сдача с 500: ${change}
	Среднее значение цен: ${average}
	Скидка: ${discount*100+"%"}
	Цена со скидкой: ${price}
	Упущенная выгода: ${Math.trunc(product/2)}-${price}->${missed_cash}
`)
