// 检查字符串结尾:

function confirmEnding(str, target) {
  for (var i = str.length - 1, len = target.length - 1; i >= 0 && len >= 0; i--, len--) {
    if (str[i] != target[len])
      break;
  }
// console.log(len);
  if (len == -1)
    return true;
  else
    return false;
}

var r = confirmEnding("Bastian", "n");
console.log(r);
