  // 1)
  //   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  //   Возвращает true, если все аргументы, кроме первого входят в первый.
  //   Первым всегда должен быть массив.

  export const isInArray = (arr: any[], ...items: any[]): Boolean => {

    return items.every(item => {
      return Boolean(arr.indexOf(item) !== -1);
    });
  }