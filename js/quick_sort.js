function quick_sort(arr,left,right){
    var count = arr.length;
    //定义基准索引
    var paritionIndex = 0;
    //获取数组最左和最右两个索引
    left = typeof left != 'number'? 0:left, 
    right = typeof right != 'number'? count-1:right;
    if(left<right){
        //调用分治法，将基准索引上的值交换到数组的正确位置，
        //同时将小于基准的放到前面，大于基准的放到后面
        paritionIndex = setPartition(arr,left,right);
        quick_sort(arr,left,paritionIndex-1);
        quick_sort(arr,paritionIndex+1,right);
    }
    return arr;
}

function setPartition(arr,left,right){
    var pivot = left,            //设定基准索引为最左边索引
        index= pivot +1;
    for (var i = index; i<=right;i++){
        if(arr[i] < arr[pivot]){
            swap(arr,i,index);
            index++;
        }
    }
    swap(arr,pivot,index-1);
    return index-1;
};

function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var arr = [5,4,3,2,1];
arr = quick_sort(arr);
console.log(arr);

