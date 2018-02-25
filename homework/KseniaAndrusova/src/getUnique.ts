/*
* Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
  */

function pushIfUnique(resultArray: any[], currentElem: any) {
	if (!resultArray.includes(currentElem)) {
		resultArray.push(currentElem);
	}
	return resultArray;
}

function getUnique(...elements: any[]): any[] {
	return elements.reduce(pushIfUnique, []);
}

let me: object = {name: 'Ksenia', age: 25};

console.info(getUnique(1, 2, 3, 45, 1, 2, 3, 4, 5));
console.info(getUnique(25, 2, 3, 'apple', me, 'apple', 'lemon', me, 1));
