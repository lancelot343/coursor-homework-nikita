const balls = 15.678;
const oranges = 123.965;
const pineapples = 90.2345;

const max = Math.max(balls, oranges, pineapples);

const min = Math.min(balls, oranges, pineapples)

const sum = balls + oranges + pineapples;

const smaller_prices = Math.floor(balls) + Math.floor(oranges) + Math.floor(pineapples);

const smaller_sum = Math.ceil(sum/100)*100;

const res = smaller_sum % 2 == 0;

const change = 500.0 - sum;

const average = (sum/3).toFixed(2)

const discount = Math.random().toFixed(2);

const product = oranges + pineapples;

const price = Math.trunc((product-(product*discount)));

const missed_cash = Math.abs(Math.floor((product/2) - price));

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
