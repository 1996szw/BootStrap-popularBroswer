var oldArray = [1,2,3,4,5];

// 只能在这一行下面写代码

var newArray = oldArray.map(function(val){
  return val + 3;
});

console.log(newArray); //[ 4, 5, 6, 7, 8 ]

// map() 方法会迭代数组中的每一个元素，并根据回调函数来处理每一个元素，最后返回一个新数组。
// map() 方法按照原始数组元素顺序依次处理元素。
// 注意： map() 不会对空数组进行检测。
// 注意： map() 不会改变原始数组。

// another
// var numbers = [4, 9, 16, 25];

// function myFunction() {
//     x = document.getElementById("demo")
//     x.innerHTML = numbers.map(Math.sqrt);
// }