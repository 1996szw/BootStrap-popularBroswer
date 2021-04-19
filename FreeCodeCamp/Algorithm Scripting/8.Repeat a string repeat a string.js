// 重复输出字符串:

function repeat(str, num) {
  // 请把你的代码写在这里
  var result = "";
  for(var i = 0;i < num;i++){
    result = result+str;
  }
  return result;
}

var r = repeat("*", 8);
console.log(r);