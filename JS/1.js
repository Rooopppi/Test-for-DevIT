// Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.
function cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let origin = {key1: 'value1', key2: 'value2', key3: {test: {a: 1}}};

const cloned = cloneDeep(origin);

origin.key3.test.a = 3

console.log("Cloned:", cloned);
console.log("Origin:", origin);

