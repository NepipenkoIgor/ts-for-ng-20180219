/**
 * Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 * и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 * Порядок элементов результирующего массива должен совпадать с порядком,
 * в котором они встречаются в оригинальной структуре.
 * @param args
 * @returns {Array<string | number>}
 */
export function getUnique(...args: Array<string | number>): Array<string | number> {
    const result: Array<string | number> = [];
    for ( const item of args) {
        if ( !result.includes(item) ) {
            result.push(item);
        }
    }
    return result;
}
