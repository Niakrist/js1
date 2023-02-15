// Функция для создания массива от 1 до 10000
function makeArr() {
	let arr = []
	for (let i = 0; i <= 10000; i++) {
		arr.push(i);
	}
	return arr;
}

// Вызываем функцию и записываем её результат в переменную
let res = makeArr();

// Функция для конвертации из числа в число состоящее из его делителей
function getConverssionNum(num) {
	let converssionNum = 0;
	for (let i = 0; i < num; i++) {
		if (num % i === 0) {
			converssionNum += i;
		}
	}
	return converssionNum;
}

// Функция сравнивает изначальное число с конвертированным(конвертированным)
function chekNum(arr) {
	let obj = {};
	for(let elem of arr) {

		if (elem === getConverssionNum(getConverssionNum(elem))) {
			obj[elem] = getConverssionNum(elem);
		}
	}
	return obj;
}

// Вызов функции
console.log(chekNum(res));