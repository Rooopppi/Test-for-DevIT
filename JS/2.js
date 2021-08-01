// Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
let arrays = [[1, 2, 3], [4, [5, [4, 3]]], [6]];

function flatDeep(arr) {
    let result = arr.reduce((acc, el) => acc.concat(Array.isArray(el) ? flatDeep(el) : el), []);
    return result;
 };
 
 console.log(flatDeep(arrays, Infinity))