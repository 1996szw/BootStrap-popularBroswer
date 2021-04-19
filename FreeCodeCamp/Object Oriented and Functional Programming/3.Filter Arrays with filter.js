var oldArray = [1,2,3,4,5,6,7,8,9,10];

// 只能在这一行下面写代码

var newArray = oldArray.filter(function(val){
  return val < 6;
});

console.log(newArray); //[ 1, 2, 3, 4, 5 ]

// filter 方法用来迭代一个数组，并且按给出的条件过滤出符合的元素。

// filter 方法传入一个回调函数，这个回调函数会携带一个参数，参数为当前迭代的项（我们叫它 val ）。

// 回调函数返回 true 的项会保留在数组中，返回 false 的项会被过滤出数组。