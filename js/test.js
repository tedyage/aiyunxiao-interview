console.log("________________________test.js__________________________")
//Number类型，原始类型
var a = 3;
function Modify(n){
    //n的作用域在Modify方法中
    n = 2;
}
//a的作用域是全局
Modify(a);
console.log(a);              // a = 3

//Object类型，引用类型
var item = {name:"init"};

function Modify2(item){
    item.name="modify";
}

Modify2(item);
console.log(item);

var item2 = {name:"init"};
function Modify3(item){
    item = new Object();
    item.name = "modify";
}
Modify3(item2);
console.log(item2);

var sTest = "hello ";
function Modify4(item){
    /*
    javascript解释程序遇到未声明过的标识符时，
    就用该变量名创建了一个全局变量，并将其初始化为指定的值
    */
    sTest1 = item + "world";
}
Modify4(sTest);
console.log(sTest1);

//boolean值true转换为number值为1，
//采用的时强制转换，Number(true)为1，parseInt(true)为NaN
//转换为string值为'true'
console.log("true + 1 = "+(true+1));
console.log("true + abc = "+(true+"abc"));
console.log("true + true = "+(true+true));
console.log("true + false = "+(true+false));
console.log("true > 0 is "+(true>0));

//Number强制转换，与调用parseInt或者parseFloat不同之处在于
//Number转换的整个值，二parseInt和parseFloat转换的是从头部开始到数字部分的结尾。
console.log("parseInt('123asb') is "+parseInt('123asb'));
console.log("parseFloat('1.2abc') is "+parseFloat("1.2abc"));
console.log("Number('123asb') is "+Number('123asb'));
console.log("Number('1.2abc') is "+Number('1.2abc'));
console.log('parseInt(true) is '+parseInt(true));
console.log('Number(true) is '+Number(true));
console.log('parseInt(null) is '+parseInt(null));
console.log('Number(null) is '+Number(null));
console.log('parseInt(undefined) is '+parseInt(undefined));
console.log('Number(undefined) is '+Number(undefined));
console.log('parseInt(new Object()) is '+parseInt(new Object()));
console.log('Number(new Object())',Number(new Object()));
