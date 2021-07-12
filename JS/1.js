// Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.
function cloneDeep(obj) {
    return Object.assign(
        {},
        obj
    );
}

let origin = {key1: 'value1', key2: 'value2', key3: {test: {a: 1}}};

const cloned = cloneDeep(origin);

console.log("Cloned:", cloned);
console.log("Origin:", origin);

