// Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа, а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. Напишите функцию, обёртывающую эту, и просто вызывающую её до тех пор, пока не будет получен успешный результат.

function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.1)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}


function reliableMultiply(a, b) {
        try {
            const res = primitiveMultiply(a, b);
            return res
        } catch {
            return reliableMultiply(a, b);
        }
}


console.log(reliableMultiply(8, 8));
