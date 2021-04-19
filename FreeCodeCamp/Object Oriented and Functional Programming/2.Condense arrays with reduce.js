var array = [4,5,6,7,8];
var singleVal = 0;

// 只能在这一行下面写代码

singleVal = array.reduce(function(pre,cur){
  return pre + cur ;
});

console.log(singleVal); //30


// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始合并(迭代)，最终计算为一个值。
// 注意: reduce() 对于空数组是不会执行回调函数的。