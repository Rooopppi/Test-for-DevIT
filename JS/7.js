// Сделать функцию поиска значений в массиве.
// Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
// Пример: 
// let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
// let result2 = array_find(testData, "Rafshan") // ["Rafshan"]

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_find(arr, search) {
    arr.forEach(el => {
          if (search === el ){
              console.log([el]);
          } else if (String(el).match(search)) {
                res = String(el).match(search)
                console.log([res.input])
          } 
        });
}

array_find(testData, /^raf.*/i)
    
// let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
// let result2 = array_find(testData, "Rafshan") // ["Rafshan"]

