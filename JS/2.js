// Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
let arrays = [[1, 2, 3], [4, 5], [6]];
const reduced = arrays.reduce((acc, arr) => acc.concat(arr), []);
console.log(reduced);
