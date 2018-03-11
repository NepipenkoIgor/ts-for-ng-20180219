  // 3)
  //   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  //   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  //   Порядок элементов результирующего массива должен совпадать с порядком,
  //   в котором они встречаются в оригинальной структуре.


  export const getUnique = (...arr: any[]): any[] => {

    const unique: any[] = [];

    arr.forEach(item => {
      if (unique.indexOf(item) !== -1) {
        return;
      }
      unique.push(item);
    });

    return unique;
  }