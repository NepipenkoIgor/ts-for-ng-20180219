/**
 * Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 * Возвращает true, если все аргументы, кроме первого входят в первый.
 * Первым всегда должен быть массив.
 * @param target
 * @param args
 * @returns {boolean}
 */
export function isInArray(target: Array<number|string>, ...args: Array<number|string>): boolean {
    if (target.length === 0) {
        return false;
    }
    for (const item of args) {
        if (!target.includes(item)) {
            return false;
        }
    }
    return true;
}
