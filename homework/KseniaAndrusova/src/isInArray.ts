/*
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/

function isInArray(arr: any[], ...params: any[]): boolean {
	return params.every((element) => {
		return arr.indexOf(element) > -1;
	});
}

function test() {
	const me: object = { name: 'Ksenia', age: 25 };
	const arr: any[] = [1, 5, 'apple', me];

	console.info(isInArray(arr, 1, 'apple', 8));
	console.info(isInArray(arr, 1, me, 5, 'apple'));
}

test();
