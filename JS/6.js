// Написать функцию для выполнения параллельных вычислений без использования Promise.

var a = function(one, two) {
    return one + two
  }
  var b = function() {
    return false;
  }


function paralell([[a, [one, two]], [b]], func) {
    results = [a(one, two), b()];
    func(results);
}


  paralell([[a, [1, 2]], [b]], function(results) {
      console.log(results); // [3, false]
  });
  

