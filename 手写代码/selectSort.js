/**
 * 选择排序
 */
var selectSort=function(arr){
    for(let i=0,len=arr.length,min;i<len;i++){
        min=arr[i];
        for(let j=i+1;j<len;j++){
            if(arr[j]<min){
                let c=min;
                min=arr[j];
                arr[j]=c;
            }
        }
        arr[i]=min; 
    }
    return arr;
}

//测试
selectSort([12,6,7,2,3,17,11])