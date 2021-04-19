// 找出多个数组中的最大数:

function largestOfFour(arr) {
  var array=[];
  for(var i=0;i<arr.length;i++){
    var max1=0;
    for(var j=0;j<arr[i].length;j++)
         max1=Math.max(arr[i][j],max1);
     array.push(max1);
  }
  return array;
}

var r = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(r);
