// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

type StrNum = string | number;

export const isInArray = (arr: StrNum[], ...items: StrNum[]): boolean => {

	return items.every((item) => {
		return Boolean(arr.indexOf(item) !== -1);
	});

};
