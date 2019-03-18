//题目，统计一个十进制整数的对应二进制数的1的总个数
function getNumber(num){
    var count = 0;
    var num_str = getBinaryNum(num).toString();   //获取十进制数对应的二进制数字符串
    var arr = num_str.split("");
    for(var i of arr){
        if(i==="1")
            count++;
    }
    return count;
}

console.log(this.getNumber(11));

function getBinaryNum(num,p){
    p = !p?0:p;
    //取当前num除以2之后的余数
    var remainder = num%2;
    //取当前num除以2之后的商
    var next = remainder==0?num/2:(num-1)/2;
    var result = remainder===0?0:1*Math.pow(10,p);
    if(next===0){
        return result;
    }else{
        p++;
        return getBinaryNum(next,p)+result;
    }
}

