

// Сколько раз каждый элемент встречается в массиве??

let autos = ['audi', 'bmw', 'mercedes', 'lexus', 'tesla', 'nissan', 'alfa-romeo', 'lada', 'audi', 'bmw', 'mercedes', 'lexus', 'tesla', 'nissan', 'alfa-romeo', 'audi', 'bmw', 'mercedes', 'lexus', 'tesla', 'nissan', 'audi', 'bmw', 'mercedes', 'lexus', 'tesla', 'audi', 'bmw', 'mercedes', 'lexus', 'audi', 'bmw', 'mercedes', 'audi', 'bmw', 'mercedes', 'audi', 'bmw', 'audi', 'bmw', 'audi'];

let amountCar = arr => {
	let count = {};
	arr.forEach(el => {
		if (!count[el]) {
			count[el] = 1;
		} else {
			count[el] += 1;
		}
	})
	return count;
}
console.log(amountCar(autos));


// Создайте массив, который содержит только уникальные значения??

let myautos = ['audi', 'bmw', 'mercedes', 'lexus', 'tesla', 'nissan', 'alfa-romeo', 'lada', 'audi', 'bmw', 'mercedes', 'lexus', 'tesla', 'nissan', 'alfa-romeo', 'audi', 'bmw', 'mercedes', 'lexus', 'tesla', 'nissan', 'audi', 'bmw', 'mercedes', 'lexus', 'tesla', 'audi', 'bmw', 'mercedes', 'lexus', 'audi', 'bmw', 'mercedes', 'audi', 'bmw', 'mercedes', 'audi', 'bmw', 'audi', 'bmw', 'audi'];

let isUnicAuto = arr => {
	// let obj = {};
	// arr.forEach(car => {
	// 	obj[car] = 1;
	// })

	// return Object.keys(obj);

	let set = new Set(myautos);
	//return Array.from(set);
	return [...set];
}


console.log(isUnicAuto(myautos));


// Сгруппируйте студентов по возрасту. На выходе должен получиться объект, ключи которого - это возраст, а значение - массив студентов??

let students = [
	{ name: 'Alex', age: 20 },
	{ name: 'Kate', age: 20 },
	{ name: 'Max', age: 30 },
	{ name: 'Peter', age: 30 },
	{ name: 'Masha', age: 30 },
	{ name: 'Oleg', age: 22 },
	{ name: 'Yuriy', age: 38 },
	{ name: 'Stas', age: 34 },
];

function isAgeStudents(arr) {
	let obj = {};

	arr.forEach(el => {
		if (!obj[el.age]) {
			obj[el.age] = [el];
		} else {
			obj[el.age].push(el);
		}

		//console.log(obj[fr] = 10)
	})
	return obj;
}
console.log(isAgeStudents(students));

// Написать функцию которая принимает два аргумента: массив из уникальных чисел и сумму в виде целого числа.
// Если сумма лююбых чисел массива равна целому числу - вывести массив этих двух чисел в любом порядке, если решения нет, вывести пустой массив.

let myNumbers = [15, 1, 3, 6, 10, 5, 2, 4, -10];
let mySum = 5;

function getNums(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		let first = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			let second = arr[j];
			if (first + second === num) {
				return [first, second];
			}
		}
	}
	return [];
}

console.log(getNums(myNumbers, mySum));




// Получить единый массив из любимых пиц каждого друга:

let friends = [
	{ name: 'Alex', pizzas: ['cheese', 'pepperoni'] },
	{ name: 'Kate', pizzas: ['salami', 'margarita'] },
	{ name: 'Max', pizzas: ['meat'] },
	{ name: 'Peter', pizzas: ['fish'] },
	{ name: 'Masha', pizzas: ['cheese', 'chili'] },
	{ name: 'Stas', pizzas: ['vegetarian', 'pepperoni'] },
]
function isPizzas(list) {
	let pizzasFriend = [];
	for (let el of list) {
		pizzasFriend.push(el.pizzas)
	}
	// pizzasFriend = pizzasFriend.flat();
	// let set = new Set(pizzasFriend);
	// return [...set];
	return pizzasFriend.flat();
}

console.log(isPizzas(friends));

let pizzas = friends.reduce((accum, el) => {
	return [...accum, ...el.pizzas]
}, []);

console.log(pizzas);




//*-------------------------------  Уровень 4.1 задачника JavaScript  ---------------------------------------*//


// Сделайте функцию, которая вернет текущий день недели словом.

function isToday() {
	let date = new Date;
	let day = date.getDay();
	let week = {
		0: 'воскресенье',
		1: 'понедельник',
		2: 'вторник',
		3: 'среда',
		4: 'четверг',
		5: 'пятница',
		6: 'суббота'
	}
	return week[day];
}
console.log(isToday());


// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

function isToday1(year, month, day) {
	let date = new Date(year, month - 1, day);
	let dayWeek = date.getDay();
	let week = {
		0: 'воскресенье',
		1: 'понедельник',
		2: 'вторник',
		3: 'среда',
		4: 'четверг',
		5: 'пятница',
		6: 'суббота'
	}
	return week[dayWeek];
}
console.log(isToday1(2023, 6, 22));


// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function isDay(seconds) {
	return seconds / 86400;
}

console.log(isDay(1000));


// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

function trimString(num, string) {
	if (string.length >= num) {
		return string.substring(0, num);
	} else {
		return string;
	}

}
console.log(trimString(4, 'мамаша'));


// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

function sumDivider(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}
	return sum;
}
console.log(sumDivider(33));



//*-------------------------------  Уровень 4.2 задачника JavaScript  ---------------------------------------*//


// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

const getSum2 = num => {
	return String(num).split('').reduce((sum, el) => { return sum += +el }, 0);
}
console.log(getSum2(355));



// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

function deleteZero2(num) {
	let arrNew = [];

	String(num).split('').forEach(function (elem) {
		if (+elem !== 0) {
			arrNew.push(elem);
		}
	})
	return arrNew.join('');
}
console.log(deleteZero2(249000000055))



// Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.

function showDay2(year, month, day) {

	let date1 = new Date();
	let date2 = new Date(year, month - 1, day);
	return Math.abs(((date1 - date2) / 86400000).toFixed(2));
}

console.log(showDay2(2023, 6, 11));



// Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.

function checkYear(year) {
	if (new Date(year, 2, 0).getDate() === 29) {
		return `${year} год - високосный`
	} else {
		return `${year} год - невисокосный`
	}
}
console.log(checkYear(2023));



// Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

function chekLeapYear() {

	let leapYear = [];
	let thisYear = new Date().getFullYear();
	for (let i = thisYear - 100; i <= thisYear; i++) {
		if (new Date(i, 2, 0).getDate() === 29) {
			leapYear.push(i);
		}
	}
	return leapYear;

}
console.log(chekLeapYear());



// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

function dayEndMonth() {

	let thisyear = new Date().getFullYear();
	let thismonth = new Date().getMonth();
	return Math.round(((new Date(thisyear, thismonth + 1, 1)) - new Date()) / 86400000);
}

console.log(dayEndMonth())



// Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

function getDayOfWeek() {

	let threeday = {};
	let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	let day = new Date().getDay();

	threeday.next = days[day + 1];
	threeday.curr = days[day];
	threeday.prev = days[day - 1];
	return threeday;
}
console.log(getDayOfWeek())



//*-------------------------------  Уровень 4.3 задачника JavaScript  ---------------------------------------*//


// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

let arr30 = [2132, 342, 343, 45345, 46, 65, 56, 56, 5, 565, 656, 56, 65, 65, 5656, 56, 56, 56, 56]
function deleteData(arr) {
	return [...new Set(arr)];
}
console.log(deleteData(arr30))



// Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.

let arr32 = [1, 1, 2, 3, 3, 4, 55, 55, 66, 7, 7, 8, 8, 8, 8, 8, 8, 10, 34, 34, 35]

function deleteReplay32(arr) {
	let arrNew = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
			arrNew.push(arr[i]);
		}
	}
	return arrNew;
}

console.log(deleteReplay32(arr32));



// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
// {
// 	max: 9,
// 	min: 1,
// }

let arr33 = [1, -1, 2, 3, 3, 4, 55, 55, 66, 7, 7, 8, 8, 8, 8, 8, 8, 10, 34, 34, 35];

function isMinMaxinArr(arr) {
	let obj = {};
	obj.max = Math.max(...arr);
	obj.min = Math.min(...arr);
	return obj;
}

console.log(isMinMaxinArr(arr33))



//*-------------------------------  Уровень 4.4 задачника JavaScript  ---------------------------------------*//


// Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.

function isDivider40(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			arr.push(i);
		}
	}
	return arr.length;
}
console.log(isDivider40(178));



// Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.

let arr45 = [];

function isZodiak(month, day) {
	let zodiak = [
		{ name: 'козерог', m: 12, d: 22 },
		{ name: 'водолей', m: 1, d: 21 },
		{ name: 'рыбы', m: 2, d: 19 },
		{ name: 'овен', m: 3, d: 21 },
		{ name: 'телец', m: 4, d: 20 },
		{ name: 'близнецы', m: 5, d: 21 },
		{ name: 'рак', m: 6, d: 22 },
		{ name: 'лев', m: 7, d: 23 },
		{ name: 'дева', m: 8, d: 23 },
		{ name: 'весы', m: 9, d: 23 },
		{ name: 'скорпион', m: 10, d: 24 },
		{ name: 'стрелец', m: 11, d: 23 },
		{ name: 'козерог', m: 12, d: 22 }
	]

	if (day >= zodiak[month].d) {
		return zodiak[month].name;
	} else {
		return zodiak[month - 1].name;
	}
}
console.log(isZodiak(1, 20));



// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.

function isDivider41(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			arr.push(i);
		}
	}
	return arr;
}
console.log(isDivider41(178));



// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

function isSimpleNum45(num) {
	if (num > 1) {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}
console.log(isSimpleNum45(23));



// Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

function deleteOdd(num) {
	let arr = [];
	for (let i = 0; i < String(num).length; i++) {
		if (String(num)[i] % 2 !== 0 || String(num)[i] == 0) {
			arr.push(String(num)[i]);
		}
	}
	return arr.join('');
}
console.log(deleteOdd(22446688135790));



// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

function isRandomNums(num1, num2, amount) {
	let arr = [];
	for (let i = 0; i < amount; i++) {
		arr.push(Math.floor(Math.random() * (num2 - num1 + 1)) + num1);
	}
	return arr;
}
console.log(isRandomNums(1, 19, 15));



//*-------------------------------  Уровень 4.5 задачника JavaScript  ---------------------------------------*//

// Дана переменная со строкой. Проверьте, что эта строка представляет собой число, то есть состоит только из цифр.

let str50 = '78';

function checkVariable(variable) {
	count = 0;
	for (let i = 0; i < variable.length; i++) {
		if (+variable[i] >= 0 && +variable[i] <= 9) {
			count++;
		} else {
			return false;
		}
	}
	return true;
}
console.log(checkVariable(str50));


// Дана переменная со строкой. Проверьте, что эта строка представляет собой дробь.

function checkFraction(num) {
	for (let i = 0; i < String(num).length; i++) {
		if (String(num)[i] === '.') {
			return true;
		}
	}
	return false;
}
console.log(checkFraction(1.532));



// Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.

function fromNum1ToNum2(num1, num2) {
	let arr = [];
	for (let i = num1 + 1; i < num2; i++) {
		arr.push(i);
	}
	return arr;
}
console.log(fromNum1ToNum2(21, 41))



// Сделайте функцию, которая заполнит массив случайными латинскими буквами.(Параметром пусть принимает число желаемых букв в массиве)

function RandomWords(num) {
	let arr = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
	let arrNew = [];
	for (let i = 0; i < num; i++) {
		arrNew.push(arr[Math.floor(Math.random() * arr.length)]);
	}
	return arrNew;
}
console.log(RandomWords(10));



// Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.

function isFibonachi(num) {
	let arr = [0, 1];
	let prev = 0;
	let next = 1;
	let sum = 1;
	for (let i = 1; i < num; i++) {
		next = prev + next;
		arr.push(next);
		prev = next - prev;
		sum += next;
	}
	console.log(arr)
	// console.log(prev)
	return sum;
}
console.log(isFibonachi(7));



//*-------------------------------  Уровень 4.6 задачника JavaScript  ---------------------------------------*//


// Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.

function isDateTrue(data) {
	return (new Date(...data.split('-')));
}

console.log(isDateTrue('2023-10-10'));



// Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.

function createWordEng(data) {

	let letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
	let arr = [];
	for (let i = 0; i < data; i++) {
		arr.push(letters[(Math.floor(Math.random() * letters.length))])
	}
	return arr.join('');
}
console.log(createWordEng(20));



// Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.

const dataToUpperCaseWord = data => {
	let arrNew = [];
	for (let el of data.split(' ')) {
		arrNew.push(el.slice(0, 1).toUpperCase());
	}
	return arrNew.join('');
}
console.log(dataToUpperCaseWord('немного разного текста по нашей теме'));



// Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.

function isDividerData(data) {

	arrNew = [];

	data.forEach(el => {
		let arr = [];
		for (let i = 1; i <= el; i++) {
			if (el % i == 0) {
				arr.push(i);
			}
		}
		arrNew.push(arr);
	})
	return arrNew;
}

console.log(isDividerData([9, 16, 20]));



// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, 
// соответствующих этим секундам, в виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

function isDayHoursMinuts(sec) {
	let obj = {};
	let a, b, c, d;

	if (sec >= 0 && sec < 60) {
		a = 0;
		b = 0;
		c = 0;
		d = sec;
	}
	if (sec >= 60 && sec < 3600) {
		a = 0;
		b = 0;
		c = Math.floor(sec / 60);
		d = sec - (c * 60);
	}
	if (sec >= 3600 && sec < 86400) {
		a = 0;
		b = Math.floor(sec / 3600);
		c = Math.floor((sec - (b * 3600)) / 60);
		d = sec - (c * 60 + b * 3600);
	}
	if (sec >= 86400) {
		a = Math.floor(sec / 86400);
		b = Math.floor((sec - (a * 86400)) / 3600);
		c = Math.floor((sec - (a * 86400 + b * 3600)) / 60);
		d = sec - (c * 60 + b * 3600 + a * 86400);
	}
	obj.d = a;
	obj.h = b;
	obj.m = c;
	obj.s = d;

	return obj;

}
console.log(isDayHoursMinuts(200000));



//*-------------------------------  Уровень 4.7 задачника JavaScript  ---------------------------------------*//


// Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

function sortMyWords(str) {
	return str.toLowerCase().split(' ').sort().join(' ');
}
console.log(sortMyWords('Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке'))



// Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их элементов.

// function isOneArrFromTwo(arr1, arr2) {
// 	return [...arr1, ...arr2];
// }

const isOneArrFromTwo = (arr1, arr2) => [...arr1, ...arr2];

console.log(isOneArrFromTwo([1, 2, 3], [4, 5, 6, 7, 8, 9, 10]));


// Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.

function isMyRandomNumber() {

	let numRandom = Math.floor(Math.random() * 100) + 1;
	return function () {
		numRandom = numRandom + numRandom;
		return numRandom;
	}

}
const isMyRandomNumberCall = isMyRandomNumber();
console.log(isMyRandomNumberCall());
console.log(isMyRandomNumberCall());
console.log(isMyRandomNumberCall());



// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

//let arr = [1, 2, 3, 4, 5];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

function isLastElemInArr(arr, data) {

	let index = arr.findIndex(function (el) {
		return el == data;
	})

	if (index < arr.length - 1 && index >= 0) {
		return arr[index + 1];
	} else if (index === arr.length - 1) {
		return arr[0];
	}
	else {
		return 'Такого числа нет в массиве';
	}
}

console.log(isLastElemInArr([1, 2, 6, 40, 5], 6));



//*-------------------------------  Уровень 4.8 задачника JavaScript  ---------------------------------------*//


// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.

function RandomFromThisArr(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
}
console.log(RandomFromThisArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));



// Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.

function RandomFromThisArrWithArgs(arr, arg) {
	let arrNew = [];
	for (let i = 1; i <= arg; i++) {
		arrNew.push(arr[Math.floor(Math.random() * arr.length)])
	}
	return arrNew;
}
console.log(RandomFromThisArrWithArgs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10));


// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.


// function RandomFromWithoutReplay(arr) {
// 	return arr[Math.floor(Math.random() * arr.length)];
// }
// console.log(RandomFromWithoutReplay([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));


// Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

function isArrayfromNums(num1, num2) {
	let arr = [];
	for (let q = num1; q <= num2; q++) {
		let flag = true;
		for (let i = 2; i < q; i++) {
			if (q % i === 0) {
				flag = false;
			}
		}
		if (flag !== false) {
			arr.push(q);
		}
	}
	return arr;
}
console.log(isArrayfromNums(20, 40));



// Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму.

function sumFromNums(...nums) {
	let sum = 0;
	nums.forEach(el => sum += el);
	return sum;
}
console.log(sumFromNums(7, 2, 8, 7, 9, 3, 1, 4, 4));



// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

function randomInMyArr(num1, num2, count) {
	let arr = [];
	for (let i = 0; i < count; i++) {
		let el = Math.floor(Math.random() * (num2 + 1 - num1)) + num1;
		if (arr[i - 1] !== el) {
			arr.push(el);
		} else {
			i--;
		}
	}
	return arr;
}
console.log(randomInMyArr(100, 101, 5));



// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.

function randomInMyArr2(num1, num2, count) {
	let arr = [];
	for (let i = 0; i < count; i++) {
		let el = Math.floor(Math.random() * (num2 + 1 - num1)) + num1;
		if (!arr.includes(el)) {
			arr.push(el);
		} else {
			i--;
		}
	}
	return arr;
}
console.log(randomInMyArr2(100, 110, 10));



//*-------------------------------  Уровень 4.9 задачника JavaScript  ---------------------------------------*//


// Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.

function howManyDays() {

	let yearNow = new Date().getFullYear();
	let yearLeap;

	for (let i = yearNow; i < yearNow + 5; i++) {
		if (new Date(i, 2, 0).getDate() == 29) {
			yearLeap = i;
			break;
		}
	}
	let diff = Math.floor((new Date(yearLeap, 1, 29).getTime() - new Date().getTime()) / (1000 * 86400));
	return diff;
}
console.log(howManyDays());



// Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.

function isDateMaslenitsa() {
	let year = new Date().getFullYear();
	let month = new Date().getMonth();
	let mydate = new Date(year, 2, 0).getDate() - new Date(year, 2, 0).getDay();
	if (month <= 1) {
		if (new Date().getDate < mydate) {
			return `${mydate} февраля ${year} год`
		}
	} else {
		let mydate2 = new Date(year + 1, 2, 0).getDate() - new Date(year + 1, 2, 0).getDay();
		return `${mydate2} февраля ${year + 1} год`
	}
}

console.log(isDateMaslenitsa());



// Сделайте функцию, которая будет возвращать случайный цвет.

function randomColor() {
	let myColor = ['#'];
	let color = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff'];
	for (let i = 0; i < 3; i++) {
		myColor.push(color[Math.floor(Math.random() * color.length)])
	}
	return myColor.join('');
}
console.log(randomColor());



// Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.

function isOurDivider(arr) {
	let arrNew = [];
	let obj = {};
	let arrsort = arr.sort((a, b) => a - b);
	for (let elem of arr) {
		for (let i = 1; i <= arr[arr.length - 1]; i++) {
			if (elem % i == 0) {
				if (!obj[i]) {
					obj[i] = 1;
				} else {
					obj[i] += 1;
				}
			}
			if (obj[i] === arr.length) {
				arrNew.push(i);
			}
		}
	}
	// console.log(arrsort);
	// console.log(obj);
	return arrNew;
}

console.log(isOurDivider([8, 24, 8, 16, 88]));


// Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.

function isMaxFromArr(data) {
	let arr = [];
	data.forEach(el => {
		el.sort((a, b) => b - a);
		arr.push(el[0]);
	});
	return arr;
}

console.log(isMaxFromArr([[24, 4], [8, 168, 88, 2], [3, 7432, 743, 45, 123]]));



//*-------------------------------  Уровень 4.10 задачника JavaScript  ---------------------------------------*//

// Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.

var isKiril = function (str) {
	if (/[а-яё]/g.test(str)) {
		return 'Кирилица';
	} else {
		return 'Латиница';
	}
}
console.log(isKiril("абв"));
console.log(isKiril("abc"));



// Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.

function isRandomArrayFromArray(arr) {
	let myarr = [];
	for (let i = 0; i < arr.length; i++) {
		let el = arr[Math.floor(Math.random() * arr.length)]
		if (!myarr.includes(el)) {
			myarr.push(el);
		} else {
			i--;
		}
	}
	return myarr;
}

console.log(isRandomArrayFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));



// Дан текст со словами. Запишите все слова этого текста в специальный объект. 
// Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.

function isObjFromString(str) {
	let obj = {};

	let words = str.toLowerCase().split(' ');
	let letters = words.map(el => el.slice(0, 1));

	for (let i = 0; i < letters.length; i++) {
		if (!obj[letters[i]]) {
			obj[letters[i]] = [words[i]];
		}
		else {
			obj[letters[i]] = [obj[letters[i]] + ' ' + words[i].split(' ')];
		}
	}
	for (let key in obj) {
		obj[key] = obj[key].join(' ').split(' ');
	}
	return obj;
}

console.log(isObjFromString('Солнечные затмения делятся на полные, частные, кольцеобразные и гибридные. При полном затмении на Земле можно наблюдать полное покрытие Солнца Луной, при частном полного покрытия не наблюдается нигде. При кольцеобразном затмении полного покрытия также не происходит, но можно наблюдать на фоне диска Солнца Луну, не закрывающую его полностью из-за меньшего углового размера, чем у Солнца. При гибридном затмении на Земле есть области, где в какой-то момент затмение наблюдается как кольцеобразное, а в другое время в других областях, как полное.'));



// Сделайте функцию, которая параметром будет принимать число, а возвращать это число прописью, то есть словами(до 1 тысячи).

function numberInWords(num) {
	let num1 = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемьнадцать', 'девятнадцать'];
	let num2 = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
	let num3 = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];


	let str = String(num);
	let n = str.length;
	let res = '';

	if (n > 3) {
		return 'Число должно быть от 0 до 1000';
	}

	if (num == 0) {
		res = 'ноль';
	}
	if (n == 1 && num > 0) {
		res = num1[num];
	}
	if (n == 2) {
		if (num <= 19) {
			res = num1[num];
		}
		if (num > 19 && num <= 99) {
			res = `${num2[str[0] - 2]} ${num1[str[1]]}`;
		}
	}
	if (n == 3) {
		if (str[1] == 0) {
			res = `${num3[str[0]]} ${num1[str[2]]}`;
		}
		if (str[1] == 1) {
			let myNum = str.substring(1);
			res = `${num3[str[0]]} ${num1[myNum]}`;
		}
		if (str[1] > 1) {
			res = `${num3[str[0]]} ${num2[str[1] - 2]} ${num1[str[2]]}`;
		}
	}
	return res;
}
console.log(numberInWords(909));



// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.

function isDividerSimple(num) {
	let arr = [];
	let arrNew = [];
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			arr.push(i);
		}
	}
	arr.forEach(el => {
		let i = 2;
		while (i <= el) {
			if (el % i === 0) {
				break;
			}
			i++;
			if (i == el) {
				arrNew.push(el);
			}
		}
	})
	// console.log(arrNew);
	return arrNew;
}
console.log(isDividerSimple(100));




