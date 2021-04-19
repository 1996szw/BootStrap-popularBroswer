// 句中单词首字母大写:

function titleCase(str) {
  // 请把你的代码写在这里

	arr = str.split(" ");
	var newStr = "";

	for(var i = 0;i<arr.length;i++){
		newStr += arr[i][0].toUpperCase();
		for(var j = 1;j<arr[i].length;j++){
			newStr += arr[i][j].toLowerCase();
		}
		if(i!=arr.length-1){
		newStr += " ";
	}
}
	return newStr;
}

var r = titleCase("I'm a little tea pot");
console.log(r); //I'm A Little Tea Pot
