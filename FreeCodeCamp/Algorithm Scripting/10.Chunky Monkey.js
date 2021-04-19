// 猴子吃香蕉, 分割数组:

function chunk(arr, size) {
  var a = [];
  for (var i = 0; i < arr.length; i += size) {
    var len = i + size;
    if (len > arr.length)
      len = arr.length;
    a.push(arr.slice(i, len)); 
  }
  return a;
}

var r = chunk(["a", "b", "c", "d","e"], 2);
console.log(r);

// slice() 方法可从已有的数组中返回选定的元素。
// slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。