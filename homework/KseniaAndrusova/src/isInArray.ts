/*
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/

interface IUser {
	age: number;
	name: string;
}

type strNumBoolUser = string | number | boolean | IUser;

export function isInArray(arr: strNumBoolUser[], ...params: strNumBoolUser[]): boolean {
	return params.every((element) => {
		return arr.indexOf(element) > -1;
	});
}
