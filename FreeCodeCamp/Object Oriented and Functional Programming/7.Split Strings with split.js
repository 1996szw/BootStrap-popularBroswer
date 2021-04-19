var string = "Split me into an array";
var array = [];

array = string.split(" ");
console.log(array); //[ 'Split', 'me', 'into', 'an', 'array' ]

// split() 方法用于把一个字符串分割成字符串数组。
// 提示： 如果把空字符串 (" ") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。
// 注意： split() 方法不改变原始字符串。