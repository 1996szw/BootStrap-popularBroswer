// 检查回文字符串:

// ps.如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

// my solution:
// function palindrome(str) {
//   // 请把你的代码写在这里

//   var arr = [];
//   str = str.toLowerCase();

//   for(var i = 0;i<str.length;i++){
//   	if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= '0' && str[i] <= '9'){
//   		arr.push(str[i]);
//   	}
//   }

//   var oldArr = [];
//   for(var j = 0;j<arr.length;j++){
//   	oldArr[j] = arr[j];
//   }
//   var newArr = arr.reverse();
  
//   console.log(arr);
//   console.log(oldArr);
//   console.log(newArr);

//   if (newArr.toString() == oldArr.toString()) {
//   	return true;
//   }else{
//   	return false;
//   }
// }

// answer solution:
function palindrome(str) {
	var strName = [];
	str = str.toLowerCase();
	for (var i = 0; i < str.length; i++) {
		if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= '0' && str[i] <= '9')
			strName.push(str[i]);
	}
	console.log(strName);
	for (var i = 0; i < Math.floor(strName.length / 2); i++) { // Math.floor()向下取整
		if (strName[i] != strName[strName.length - 1 - i]) {
			break;
		}
	}
	console.log(i);
	if (i == Math.floor(strName.length / 2))
		return true;
	else
		return false;
}

var r = palindrome("race car");
console.log(r);
