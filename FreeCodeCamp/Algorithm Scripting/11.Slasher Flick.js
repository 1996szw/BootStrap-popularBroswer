// 截断数组:

function slasher(arr, howMany) {
  // 请把你的代码写在这里
  arr.splice(0,howMany); // splice() 会直接改变原来的数组
  return arr;
}

var r = slasher([1, 2, 3], 2);
console.log(r);
