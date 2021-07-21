// Выведите все элементы массива используя рекурсию.

var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 
function recuseLog(arr, i=0) { 
    if (i >= arr.length) {
        return;
    } else {
        console.log(arr[i]);
        recuseLog(arr, i+1);
    }
} 
recuseLog(arr);
