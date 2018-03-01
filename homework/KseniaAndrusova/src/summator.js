"use strict";
/*
*  писать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */
function summator() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, elements_1 = elements; _a < elements_1.length; _a++) {
        var elem = elements_1[_a];
        if (typeof elem === 'string') {
            result += parseFloat(elem);
        }
        else {
            result += elem;
        }
    }
    return result;
}
console.info(summator(6, 10, '22', 13, '11.22'));
