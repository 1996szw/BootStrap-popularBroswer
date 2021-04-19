// 数组排序并找出元素索引:

function where(arr, num) {
  // 请把你的代码写在这里
  var newArr = [];
  newArr = arr.concat(num);
  newArr.sort(function(a,b){
    return a-b;
  });
  for(var i =0;i<newArr.length;i++){
    if(newArr[i] === num){
      return i;}
  }
}

var r = where([40, 60], 50);
console.log(r);  //1
