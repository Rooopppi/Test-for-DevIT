// Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.

// Доступные шаблоны: 
// 'string' => строки, 
// 'number' => числа, 
// 'int' => целые числа, 
// 'float' => числа с плавающей точкой, 
// 'bool' => true | false, 
// 'function' => функция, 
// 'array' => массив, 
// Object => объект {name: 'string'}
// Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
// Пример: 
// let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result3 = array_normalize(testData4, {age: 'float'}) // []
// let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

let testData4 = [{"name":"Vasya","email":"vasya@example.com","age":20},
{"name":"Dima","email":"dima@example.com","age":34},
{"name":"Colya","email":"colya@example.com","age":46},
{"name":"Misha","email":"misha@example.com","age":16},
{"name":"Ashan","email":"ashan@example.com","age":99},
{"name":"Rafshan","email":"rafshan@example.com","age":11},
1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,
[[[[1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,
[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]]

function array_normalize(arr, shema, transform) {
    let normalized = [];
    if (!transform) {
        arr.forEach(function(el, i) {
            if (typeof el == typeof shema && typeof shema == "string") {
                normalized.push(el)
            } 
        })
    } else if (typeof el == typeof shema) {
        arr.forEach(function(el, i) { 
                normalized.push(String(el))
            });
        } else if (typeof el == typeof shema && typeof shema == Object) {
            console.log(Array.from(2, 4, 5));
            Array.from(el).forEach(function(el, i) {
                if (el == shema) {
                    console.log(el);
                    normalized.push(el)
                }
            })
        }
    console.log(normalized);
    
}
array_normalize(testData4, {age: 'float'})

// function array_normalize(arr, shema, transform) {
//     let normalized = [];
//     if (transform) {
//         arr.forEach(function(el, i) {
//             if (typeof el == typeof shema && typeof shema == "object") {
//                 for ()
//                 normalized.push(el)
//             } 
//         })
//     } else {
//         arr.forEach(function(el, i) { 

//                 normalized.push(String(el))
//             });
        
//     }
//     console.log(normalized);
// }
// array_normalize(testData4, {age: 'float'}, true)

