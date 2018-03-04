/*
*  писать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */

function summator(...elements: Array<string | number>): number {
	let result: number = 0;
	for (let elem of elements) {
		if (typeof elem === 'string') {
			result += parseFloat(elem);
		} else {
			result += elem;
		}
	}

	return result;
}

console.info(summator(6, 10, '22', 13, '11.22'));
