  // 2)
  //  писать функцию summator(), которая сумирует переданые ей аргументы.
  //  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

  export const summator = (...args: (number | string)[]): number => {

    const parsed: number[] = args.map(item => {
      if (typeof item === 'string') {
        return parseInt(item);
      }
      return item;

    });

    return parsed.reduce((acc, curr) => acc += curr, 0);
  }