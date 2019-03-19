console.log("________________________test.js__________________________")
//Number类型，值类型
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
