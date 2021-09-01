/**
 * 冒泡排序
 */
var bubbleSort=function(arr){
    for(let i=arr.length-1,tmp;i>0;i--){
        for(let j=0;j<i;j++){
            tmp=arr[j];
            if(tmp>arr[j+1]){
                arr[j]=arr[j+1];
                arr[j+1]=tmp
            }
        }
    }
    return arr
}

//测试
bubbleSort([12,6,7,2,3,17,11])