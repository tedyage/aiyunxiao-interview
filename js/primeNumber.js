/*
本题主要考验获取质数的算法逻辑，即质数不能被除1和自己意外任何数整除
*/
//在1-100中输出所有的素数
console.log("________________________primeNumber.js__________________________")
function getPrimeNumber(){
    for(var i = 1;i<=100;i++){
        //1被排除
        if(i===1)
            continue;
        //调用判断方法
        if(isPrimeNumber(i))
            console.log(i);
    }
}

//判断是不是素数
function isPrimeNumber(num){
    for(var i = 2 ; i < num; i++){
        //只要在（i，num）之间，有一个整数能整除num，说明num不是素数
        if(num%i==0){
            return false;
        }
    }
    return true;
}

getPrimeNumber();