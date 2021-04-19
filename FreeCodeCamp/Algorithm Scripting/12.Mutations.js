// 比较字符串:

// why not this ?
// function mutation(arr) {
//   // 请把你的代码写在这里
//   var s0 = arr[0].toLowerCase();
//   var s1 = arr[1].toLowerCase();
//   for(var i = 0;i <= s1.length;i++){
//     if(s0.indexOf(s1[i]) !== -1){
//       return true;
//     }else{
//       return false;
//     }
//   }
// }

function mutation(arr) {
  var s0, s1 = [];
  s0 = arr[0].toLowerCase();
  s1 = arr[1].toLowerCase();
  var yes = 0;
  // console.log(s0, s1);
  for (var i = 0; i < s1.length; i++) {
    for (var j = 0; j < s0.length; j++) {
       // console.log(s1[i]+"   "+s0[j]);
      if (s1[i] == s0[j]) {
        yes++;
        break;
      }
    }
  }
  // console.log(yes);
  return yes == s1.length;
}

var r = mutation(["hello", "hey"]);
console.log(r);