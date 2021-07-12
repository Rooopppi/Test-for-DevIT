// Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.
var arr = [1, 2, 3];

Object.defineProperty(Array.prototype, 'append', {
    value: function(a) {  
        const appended = [a].concat(this);
        console.log(appended); 
    }
});

arr.append(0);
