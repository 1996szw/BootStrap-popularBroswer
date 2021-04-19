// 摧毁数组:

function destroyer(arr) {
  var b = [];
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  for (var k = 0; k < arr.length; k++) {
    var a = 1;
    for (var i = 0; i < args.length; i++) {
      if (arr[k] == args[i])
        a = 0;
    }
    if (a)
      b.push(arr[k]);
  }
  return b;
}

var r = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(r);