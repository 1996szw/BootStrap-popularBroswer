// 过滤数组假值:

function bouncer(arr) {
  // 请把你的代码写在这里
  return arr.filter(Boolean);
}

var r = bouncer([7, "ate", "", false, 9]);
console.log(r);
