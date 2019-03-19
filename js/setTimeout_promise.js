/*
本题目主要考察对event loop和javascript单线程执行任务的理解，
event loop先执行完所有的同步任务之后，
会先执行异步任务中所有的微任务，
最后在执行所有的宏任务
*/
console.log("________________________setTimeout_promise.js__________________________")

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

var inner = document.getElementById('inner');
var outer = document.getElementById('outer');
function handler(){
    console.log('click');

    Promise.resolve().then(()=>console.log('promise'));

    setTimeout(()=>console.log('timeout'));

    requestAnimationFrame(()=>console.log('animationFrame'));

    outer.setAttribute('data-random', Math.random());
}

//监视DOM元素outer的修改，
//如果它的attributes发生了修改，
//输出observer
var targetNode = document.querySelector('#outer');
new MutationObserver(()=>{
    console.log('observer')
}).observe(targetNode,{
    attributes:true
});

inner.addEventListener('click',handler);
outer.addEventListener('click',handler);