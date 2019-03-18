//javascript的object的属性其实与哈希表非常类似
function HashMap(){
    var size = 0;                 //初始化HashMap内部变量size为HashMap记录条数
    var entry = new Object();     //初始化entry，用于接受键值对

    //声明add属性，并赋值一个function，以插入键值对
    this.add = function(key,value){
        if(!this.containKey(key)){
           size++;
        }
        entry[key] = value;
    };

    //声明containKey属性，并赋值一个function，判断指定的key是否存在
    this.containKey = function(key){
        return (key in entry);
    };

    //声明containValue属性，并赋值一个function,判断指定的value是否存在
    this.containValue = function(value){
        for(var i in entry){
            //判断entry中是否存在这个value，存在返回true
            if(entry[i]===value){
                return true;
            }
        }
        //循环完成，则不存在此value，返回false
        return false;
    };

    //声明keys属性，并赋值一个function，获取当前entry的key集合
    this.keys = function(){
        var arr = [];
        for(var i in entry){
            arr.push(i);
        }
        return arr;
    };

    //声明values属性，并赋值一个function，获取当前entry的value集合
    this.values = function(){
        var arr = [];
        for(var i in entry){
            arr.push(entry[i]);
        }
        return arr;
    };

    //声明getValue属性，并赋值一个function，获取指定key对应的value
    this.getValue = function(key){
        if(this.containKey(key)){
            return entry[key];
        }else{
            return null;
        }
    };

    //声明getSize属性，并赋值一个function，获取当前entry的键值对数量
    this.getSize = function(){
        return size;
    };

    //声明remove属性，并赋值一个function，删除当前entry指定的key/value
    this.remove = function(key){
        if(this.containKey(key)){
            //判断是否成功删除了这个key/value
            if(delete entry[key]){
                size--;
            }
        }
    };

    //声明clear属性，并赋值一个function，清楚当前entry内所有key/value
    this.clear = function(){
        size = 0;
        entry = new Object();       
    };
};

var hm = new HashMap();
hm.add("name","田志强");
hm.add("age",30);
hm.add("gender","男");

console.log(hm.getValue("name"));
console.log(hm.getValue("age"));
console.log(hm.getValue("gender"));
console.log(hm.getValue("Mobile"));
