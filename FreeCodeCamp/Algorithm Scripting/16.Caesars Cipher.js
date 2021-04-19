// 凯撒密码:

function rot13(str) { // LBH QVQ VG!
  var str1 = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      var s = str.charCodeAt(i);
      s -= 65;
      s += 13;
      s %= 26;
      s += 65;
      var ss = String.fromCharCode(s);
      // console.log(ss);
      str1 += ss;
    } else {
      str1 += str[i];
    }
  }
  // console.log(str1);
  return str1;
}

var r = rot13("SERR PBQR PNZC");  // 你可以修改这一行来测试你的代码
console.log(r);
