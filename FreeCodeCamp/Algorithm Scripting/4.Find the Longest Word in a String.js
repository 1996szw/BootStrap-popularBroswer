// 找到字符串中最长的单词

function findLongestWord(str) {

  var maxLength = 0;
  var arr = [];
  var s = str.split(" ");
  console.log(str);

  for(var i = 0;i<s.length;i++){
  	arr[i] = s[i].length;
  }

  maxLength = Math.max.apply(null,arr);
  return maxLength;
}

var r = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(r); //6