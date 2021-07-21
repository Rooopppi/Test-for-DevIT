// Сделать функцию которая обрезает массив до указанного значения.

// Синтаксис: array_skip_until(arr: array, value: any): any[]
// Пример: 
// let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
// let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
// let result3 = array_skip_until(testData, "asd") // []

array = [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_skip_until(arr, value) {
    let reduced = [];
    for (i=arr.length-1; i>=0; i--) {
        if (arr[i] !== value) {
            reduced.unshift(arr[i])
        } else {
            reduced.unshift(arr[i]);
            console.log(reduced); 
        }
    }
}


array_skip_until(array, "Rafshan")

