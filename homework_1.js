const let balls = 15.678;
const let oranges = 123.965;
const let pineapples = 90.2345;

const let max = Math.max(balls, oranges, pineapples);

const let min = Math.min(balls, oranges, pineapples)

const let sum = balls + oranges + pineapples;

const let smaller_prices = Math.floor(balls) + Math.floor(oranges) + Math.floor(pineapples);

const let smaller_sum = Math.ceil(sum/100)*100;

const res = smaller_sum % 2 == 0;

const let change = 500.0 - sum;

const let average = (sum/3).toFixed(2)

const let discount = Math.random().toFixed(2);

const let product = oranges + pineapples;

const let price = Math.trunc((product-(product*discount)));

const let missed_cash = Math.abs(Math.floor((product/2) - price));

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
