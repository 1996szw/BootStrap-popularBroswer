// 翻转字符串:

function reverseString(str) {
  // 请把你的代码写在这里

  var arr = str.split("");
  var arr1 = arr.reverse();
  str = arr1.join("");


  return str;
}

var r = reverseString("hellhhbho");
console.log(r);