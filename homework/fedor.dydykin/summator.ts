/**
 * Написать функцию summator(), которая сумирует переданые ей аргументы.
 * Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 * @param args
 * @returns {number}
 */
export function summator(...args: Array<number | string>): number {
    let sum: number = 0;

    function isString(input: number | string): input is string {
        return typeof input === "string";
    }

    for (const arg of args) {
        if (isString(arg)) {
            sum += parseFloat(arg);
        } else {
            sum += arg;
        }
    }
    return sum;
}
