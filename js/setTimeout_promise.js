//javascript将主线程中的任务依次执行完
console.log(1);
//主线程任务执行完，系统依次读取任务队列里的事件。相对应的异步任务进入主线程，依次执行
//异步任务，宏任务（setTimeout/setInterval/IO等），优先级低于微任务
setTimeout(function(){
    console.log(2);
});
//微任务（Promise/MutaionObserver等），优先级较高
new Promise(function(resolve,reject){
    console.log(4);
    resolve();
    console.log(7)
}).then(()=>{
    console.log(5);
});

console.log(6);