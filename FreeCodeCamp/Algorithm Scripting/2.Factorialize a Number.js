// 计算一个整数的阶乘:

function factorialize(num) {
  // 请把你的代码写在这里
	var j = 1;
	for (var i = 1; i <= num; i++) {
		j = j * i;
	}
	num = j;
	return num;
}

var r = factorialize(5);
console.log(r);
