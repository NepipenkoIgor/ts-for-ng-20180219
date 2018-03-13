/*
*  писать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */

type strNum = string | number;

export function summator(...elements: strNum[]): number {
	return elements.reduce((prev: number, currentValue: strNum): number =>  {
		if (typeof currentValue === 'number') {
			return prev + currentValue;
		}

		return prev + (Number.isNaN(parseFloat(currentValue))
			? 0
			: parseFloat(currentValue));
	}, 0);
}
