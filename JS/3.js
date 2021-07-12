// Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа, а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. Напишите функцию, обёртывающую эту, и просто вызывающую её до тех пор, пока не будет получен успешный результат.

function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    try {
        while (true) {
            const res = primitiveMultiply(a, b);
        
            if (typeof res == 'number') {
                console.log(res);
                break;
            }  
        }
    }
    catch {
        
    }
}
console.log(reliableMultiply(8, 8));
