var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

newArray = oldArray.concat(concatMe);

console.log(newArray); //[ 1, 2, 3, 4, 5, 6 ]

// concat() 方法用于连接两个或多个数组。

// 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。