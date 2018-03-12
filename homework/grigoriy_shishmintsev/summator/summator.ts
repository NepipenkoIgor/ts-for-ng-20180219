// 2)
//  писать функцию summator(), которая сумирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

type StrNum = string | number;

export const summator = (...args: StrNum[]): number => {

	const parsed: number[] = args.map((item) => {
		if (typeof item === 'string') {
			return parseInt(item, 10);
		}
		return item;

	});

	return parsed.reduce((acc, curr) => acc += curr, 0);
};
