// 截断字符串

function truncate(str, num) {
  // 请把你的代码写在这里
  var result = "";
  if(str.length > num){
    if(num > 3){
      for(var i = 0;i < num-3; i++){
        result = result + str[i];
      }
      result = result + "...";
    }else if (num <=3) {
      for(var j = 0;j < num; j++){
        result = result + str[j];
      }
      result = result + "...";
    }
  }else if (str.length <= num){
    result = str;
  }
  return result;
}

var r = truncate("A-tisket a-tasket A green and yellow basket", 11);
console.log(r);
