"use strict";
/*
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/
function isInArray(arr) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return params.every(function (element) {
        return arr.indexOf(element) > -1;
    });
}
function test() {
    var me = { name: 'Ksenia', age: 25 };
    var arr = [1, 5, 'apple', me];
    console.info(isInArray(arr, 1, 'apple', 8));
    console.info(isInArray(arr, 1, me, 5, 'apple'));
}
test();
