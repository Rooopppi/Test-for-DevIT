// Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.
var arr = [1, 2, 3];

Object.defineProperty(Array.prototype, 'append', {
    value: function(a) { 
        const old = [...this];
        this.splice(0,this.length);
        this.push(...[a].concat(old)); 
    }
});
arr.append(0, 2, 5)
console.log(arr);
