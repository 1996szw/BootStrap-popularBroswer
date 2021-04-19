    var num = 90;
    var regex = new RegExp(/^[0-9]*[1-9][0-9]*$/);
    var i = 2;
    var handle = num;
    var arr = new Array();
    while(i<handle){     //i小于num则一直循环下去，直到i=num为止
        var result = handle/i;
        if(regex.test(result)){ //除2结果为整数
            arr.push(i);
            i=2;
            handle=result;
        }else{
            i++;
        }
        if(i == handle-1){  //判断是否要结尾
            arr.push(handle)
            break;
        }
    }

    var str = String();
    for(i=0;i<arr.length;i++){
        str += arr[i];
    }

    var arr = str.split("");
    console.log(arr);